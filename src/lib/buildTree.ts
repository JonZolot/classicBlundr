import { Statement, StatementNode} from "../types/types"

export function buildTree(statements: Statement[]): StatementNode[] {
  const map = new Map<string, StatementNode>();

  // Initialize nodes
  statements.forEach(s => {
    map.set(s.id, { ...s, children: [] });
  });

  const roots: StatementNode[] = [];

  // Link children to parents
  map.forEach(node => {
    if (node.parentId) {
      const parent = map.get(node.parentId);
      if (parent) parent.children.push(node);
    } else {
      roots.push(node);
    }
  });

  // Sort siblings by index
  const sortTree = (nodes: StatementNode[]) => {
    nodes.sort((a, b) => a.index - b.index);
    nodes.forEach(n => sortTree(n.children));
  };

  sortTree(roots);
  return roots;
}
