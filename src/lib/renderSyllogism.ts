import { Syllogism } from "../types/types";
import { buildTree } from "./buildTree";
import { renderStatement } from "./renderStatement";

export function renderSyllogism(s: Syllogism): string {
  const tree = buildTree(s.statements);

  const body = tree.map(renderStatement).join("");

  return `
    <div class="syllogism">
      <h2>${s.title}</h2>
      <p>${s.description}</p>
      <div class="syllogism-body">
        ${body}
      </div>
    </div>
  `;
}
