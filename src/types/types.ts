export type DerivationStep=string;

export interface Statement{
    id:string;
    text:string;
    index:number;
    parentId?:string;
    derivationStep:DerivationStep;
    children?: Statement[]
}


export interface Syllogism {
  id: string;
  title: string;
  description: string;

  // flat list from Supabase
  statements: Statement[];

  // optional: nested tree for rendering
  tree?: StatementNode[];
}

export interface StatementNode extends Statement {
  children: StatementNode[];
}