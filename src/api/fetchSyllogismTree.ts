import { supabase } from "../supabaseClient";
import type { SyllogismNode } from "../types/syllogism";

export async function fetchSyllogismTree(rootId: string): Promise<SyllogismNode | null>{
    const {data, error} = await supabase.rpc(`get_syllogism_tree`, {root_id:rootId});
    if (error){
        console.error(error);
        return null;
    }
    return data as SyllogismNode;
}