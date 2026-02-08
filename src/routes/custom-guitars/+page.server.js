import { fail } from "@sveltejs/kit";
import nodemailer from "nodemailer";
import { env } from "$env/dynamic/private";
const EMAIL_USER = env.EMAIL_USER;
const EMAIL_PASS = env.EMAIL_PASS;

export const actions = {
	submitForm: async ({ request, locals }) => {
		// Access supabase through locals inside the function to avoid eager fetch issues
		const { supabase } = locals;

		const data = await request.formData();
		const name = data.get("name");
		const email = data.get("email");
		const tel = data.get("tel");
		const description = data.get("description");

		// --- 1. Save to Supabase ---
		const { error: dbError } = await supabase.from("guitar_requests").insert([
			{
				name,
				email,
				tel: tel ? String(tel) : null, // Ensure it's a string
				description
			}
		]);

		if (dbError) {
			console.error("Supabase Error Details:", dbError);
			return fail(500, { message: dbError.message });
		}

		// --- 2. Send an Email ---
		const transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: EMAIL_USER,
				pass: EMAIL_PASS
			}
		});

		const mailOptions = {
			from: EMAIL_USER,
			to: EMAIL_USER,
			subject: `New Custom Guitar Request from ${name}`,
			html: `
                <h3>New Request Details:</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${tel}</p>
                <p><strong>Description:</strong> ${description}</p>
            `
		};

		try {
			await transporter.sendMail(mailOptions);
			console.log("Email sent and data saved!");
			return { success: true };
		} catch (error) {
			console.error("Error sending email:", error);
			// Return success because the DB part worked, but flag the email failure
			return { success: true, emailError: true };
		}
	}
};
