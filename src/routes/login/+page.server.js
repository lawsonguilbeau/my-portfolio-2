// src/routes/login/+page.server.js
import { fail, redirect } from "@sveltejs/kit"; // <--- ADD THIS LINE

export const actions = {
	default: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();
		const email = formData.get("email");
		const password = formData.get("password");

		const { error } = await supabase.auth.signInWithPassword({ email, password });

		if (error) {
			// This is where 'fail' was crashing the app
			return fail(400, { error: error.message });
		}

		// This is where 'redirect' was potentially crashing the app
		throw redirect(303, "/admin");
	}
};
