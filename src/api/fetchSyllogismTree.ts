// fetchSyllogismTree.ts

import { supabase } from "../supabaseClient";
import { Syllogism, Statement } from "../types/types";
import { buildTree } from "../lib/buildTree";

export async function fetchSyllogismTree(id: string): Promise<Syllogism | null> {
  // Fetch syllogism metadata
  const { data: syllogism, error: syllogismError } = await supabase
    .from("syllogisms")
    .select("id, title, description")
    .eq("id", id)
    .single();

  if (syllogismError || !syllogism) {
    console.error("Failed to fetch syllogism:", syllogismError);
    return null;
  }

  // Fetch all statements for this syllogism
  const { data: statements, error: statementsError } = await supabase
    .from("statements")
    .select("id, text, index, derivation_step, parent_id")
    .eq("syllogism_id", id)
    .order("index", { ascending: true });

  if (statementsError || !statements) {
    console.error("Failed to fetch statements:", statementsError);
    return null;
  }

  // Normalize DB rows into your TS model
  const normalized: Statement[] = statements.map(s => ({
    id: s.id,
    text: s.text,
    index: s.index,
    derivationStep: s.derivation_step,
    parentId: s.parent_id ?? undefined
  }));

  // Build recursive tree
  const tree = buildTree(normalized);

  return {
    id: syllogism.id,
    title: syllogism.title,
    description: syllogism.description,
    statements: normalized,
    tree
  };
}
