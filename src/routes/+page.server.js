import { supabase } from "$lib/supabaseClient";

export async function load() {
	const { data } = await supabase.from("accounts").select();
	return {
		accounts: data ?? [],
	};
}
