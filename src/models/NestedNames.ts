export interface iNestedName {
  id: string;
  name: string;
  children?: iNestedNames;
}

export type iNestedNames = iNestedName[];
