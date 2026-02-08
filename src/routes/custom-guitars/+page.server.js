import { fail } from "@sveltejs/kit";
import nodemailer from "nodemailer";
import { env } from "$env/dynamic/private";

export const actions = {
	submitForm: async ({ request, locals }) => {
		// 1. Grab everything from locals and env INSIDE the function
		const { supabase } = locals;
		const EMAIL_USER = env.EMAIL_USER;
		const EMAIL_PASS = env.EMAIL_PASS;

		const data = await request.formData();
		const name = data.get("name");
		const email = data.get("email");
		const tel = data.get("tel");
		const description = data.get("description");

		// --- 2. Save to Supabase ---
		const { error: dbError } = await supabase.from("guitar_requests").insert([
			{
				name,
				email,
				tel: tel ? String(tel) : null,
				description
			}
		]);

		if (dbError) {
			console.error("Supabase Error Details:", dbError);
			return fail(500, { message: dbError.message });
		}

		// --- 3. Send an Email ---
		// Basic check to make sure env vars loaded
		if (!EMAIL_USER || !EMAIL_PASS) {
			console.error("Email credentials missing in environment variables");
			return { success: true, emailError: "Server configuration error" };
		}

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
			return { success: true, emailError: true };
		}
	}
};
