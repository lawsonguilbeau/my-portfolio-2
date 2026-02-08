import { fail } from "@sveltejs/kit";

export const actions = {
	// This name 'subscribe' must match the action="?/subscribe" in the HTML
	subscribe: async ({ request, locals }) => {
		const { supabase } = locals;
		const data = await request.formData();

		const email = data.get("email");
		const firstName = data.get("firstName");

		// Save to your new Supabase table
		const { error: dbError } = await supabase.from("newsletter_subscribers").insert([
			{
				email: email,
				first_name: firstName
			}
		]);

		if (dbError) {
			console.error("Newsletter Error:", dbError);
			// If they already signed up, Supabase returns an error we can handle
			if (dbError.code === "23505") {
				return fail(400, { error: true, message: "You're already subscribed!" });
			}
			return fail(500, { error: true, message: "Server error. Try again later." });
		}

		return { success: true };
	}
};
