import { StatementNode } from "../types/types";

export function renderStatement(node: StatementNode): string {
  const childrenHtml = node.children
    .map(child => renderStatement(child))
    .join("");

  return `
    <div class="statement">
      <div class="statement-line">
        <span class="statement-text">${node.text}</span>
        <span class="statement-derivation">(${node.derivationStep})</span>
      </div>
      ${childrenHtml ? `<div class="children">${childrenHtml}</div>` : ""}
    </div>
  `;
}
