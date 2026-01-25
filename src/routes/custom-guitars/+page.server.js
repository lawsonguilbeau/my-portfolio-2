import { fail } from "@sveltejs/kit";
import nodemailer from "nodemailer";
import axios from "axios";

// Access the environment variables with the VITE_ prefix
import { VITE_EMAIL_USER, VITE_EMAIL_PASS } from "$env/static/private";

// This is the SvelteKit Form Action that runs on the server
export const actions = {
	submitForm: async ({ request }) => {
		// Get the form data from the request
		const data = await request.formData();
		const name = data.get("name");
		const email = data.get("email");
		const tel = data.get("tel");
		const description = data.get("description");

		const transporter = nodemailer.createTransport({
			service: "gmail", // or another email service
			auth: {
				user: "JiggyMac12@gmail.com",
				pass: "bqxb yfdu adbl rafx "
			}
		});

		const mailOptions = {
			from: "your-email@gmail.com",
			to: "JiggyMac12@gmail.com", // Replace with your email
			subject: `New Custom Guitar Request from ${name}`,
			html: `
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${tel}</p>
                <p><strong>Description:</strong> ${description}</p>
            `
		};

		try {
			await transporter.sendMail(mailOptions);
			console.log("Email sent successfully");
		} catch (error) {
			console.error("Error sending email:", error);
			return fail(500, { message: "Failed to send email." });
		}

		try {
			await axios.post("YOUR_SPREADSHEET_API_ENDPOINT", {
				name,
				email,
				tel,
				description
			});
			console.log("Data saved to spreadsheet");
		} catch (error) {
			console.error("Error saving data:", error);
			return fail(500, { message: "Failed to save data." });
		}

		// If everything is successful, return a success message
		return { success: true };
	}
};
