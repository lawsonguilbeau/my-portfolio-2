import { fail } from "@sveltejs/kit";

export const actions = {
	subscribe: async ({ request, locals }) => {
		const formData = await request.formData();
		const email = formData.get("email");
		const firstName = formData.get("firstName");

		const { error } = await locals.supabase.from("newsletter_subscribers").insert([
			{
				email: email,
				first_name: firstName
			}
		]);

		if (error) {
			// Check if it's the duplicate email error
			if (error.code === "23505") {
				return fail(400, {
					error: true,
					message: "You're already on the list! Check your inbox for updates."
				});
			}
			return fail(500, {
				error: true,
				message: "Something went wrong. Please try again."
			});
		}

		return { success: true };
	}
};
