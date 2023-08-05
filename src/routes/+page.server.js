import { supabase } from "$lib/supabaseConfig";

export async function load() {
	const { data } = await supabase.from("accounts").select();
	return {
		accounts: data ?? [],
	};
}
