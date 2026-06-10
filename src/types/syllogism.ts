export interface Premise {
  id: string;
  text: string;
  order: number;
}

export interface SyllogismNode {
  id: string;
  title: string | null;
  conclusion: string;
  premises: Premise[] | null;
  children: SyllogismNode[] | null;
}
