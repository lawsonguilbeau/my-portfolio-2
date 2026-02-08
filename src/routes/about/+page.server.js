import { fail } from "@sveltejs/kit";

export const actions = {
	subscribe: async ({ request, locals }) => {
		const { supabase } = locals;
		const data = await request.formData();

		const email = data.get("email");
		const firstName = data.get("firstName");

		// We use the exact same table name as the other page
		const { error: dbError } = await supabase.from("newsletter_subscribers").insert([
			{
				email: email,
				first_name: firstName
			}
		]);

		if (dbError) {
			// Check for duplicate email error (Postgres code 23505)
			if (dbError.code === "23505") {
				return fail(400, { error: true, message: "You're already on the list!" });
			}
			return fail(500, { error: true, message: "Something went wrong. Please try again." });
		}

		return { success: true };
	}
};
