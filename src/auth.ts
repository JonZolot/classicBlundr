import { supabase } from "./supabaseClient"

export async function getOrCreateUser(){
    // Check if a session already exists
    const {data: {session}} = await supabase.auth.getSession();
    if (session?.user){
        return session.user;
    }

    // Otherwise, sign in anonymously
    const {data, error} = await supabase.auth.signInAnonymously();

    if (error){
        console.error("Auth error:",error);
        return null;
    }
    return data.user
}