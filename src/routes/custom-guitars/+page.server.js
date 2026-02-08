import { fail } from "@sveltejs/kit";
import nodemailer from "nodemailer";
import { EMAIL_USER, EMAIL_PASS } from "$env/static/private";

export const actions = {
	// Note: We changed this to 'default' or you must ensure your form
	// uses <form action="?/submitForm">
	submitForm: async ({ request, locals: { supabase } }) => {
		// ^^^ We grab 'supabase' from 'locals' here!

		const data = await request.formData();
		const name = data.get("name");
		const email = data.get("email");
		const tel = data.get("tel");
		const description = data.get("description");

		// --- 1. Save to Supabase using the 'locals' client ---
		const { error: dbError } = await supabase.from("guitar_requests").insert([
			{
				name,
				email,
				tel,
				description
			}
		]);

		if (dbError) {
			console.error("Supabase Error Details:", dbError);
			// This will now show the REAL error message instead of empty quotes
			return fail(500, { message: dbError.message || "Failed to save to database." });
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
		} catch (error) {
			console.error("Error sending email:", error);
			return fail(500, { message: "Data saved, but email notification failed." });
		}

		return { success: true };
	}
};
