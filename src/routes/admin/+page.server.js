// src/routes/admin/+page.server.js
import { redirect, error } from "@sveltejs/kit";

export const load = async ({ locals: { supabase, getSession } }) => {
	const session = await getSession();

	if (!session) {
		throw redirect(303, "/login");
	}

	const { data: requests, error: dbError } = await supabase
		.from("guitar_requests")
		.select("*")
		.order("created_at", { ascending: false });

	if (dbError) throw error(500, "Database error");

	return { requests };
};
