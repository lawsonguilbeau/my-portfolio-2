import { createServerClient } from "@supabase/ssr";
import { SUPABASE_URL, SUPABASE_ANON_KEY } from "$env/static/private";

/** @type {import('@sveltejs/kit').Handle} */
export const handle = async ({ event, resolve }) => {
	/**
	 * 1. Initialize the client.
	 * This setup is just configuration; it doesn't trigger a 'fetch' yet.
	 */
	event.locals.supabase = createServerClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
		cookies: {
			getAll: () => event.cookies.getAll(),
			setAll: (cookiesToSet) => {
				cookiesToSet.forEach(({ name, value, options }) => {
					event.cookies.set(name, value, { ...options, path: "/" });
				});
			}
		}
	});

	/**
	 * 2. Define a "Lazy" session getter.
	 * By wrapping this in a function, we ensure fetch is only called
	 * when a load function or action actually requests the session.
	 */
	event.locals.safeGetSession = async () => {
		const {
			data: { session }
		} = await event.locals.supabase.auth.getSession();

		if (!session) {
			return { session: null, user: null };
		}

		const {
			data: { user },
			error
		} = await event.locals.supabase.auth.getUser();

		if (error) {
			// User is invalid or session expired
			return { session: null, user: null };
		}

		return { session, user };
	};

	/**
	 * 3. Resolve the event.
	 * filterSerializedResponseHeaders is required for Supabase to
	 * work correctly with SvelteKit's fetch caching.
	 */
	return resolve(event, {
		filterSerializedResponseHeaders(name) {
			return name === "content-range";
		}
	});
};
