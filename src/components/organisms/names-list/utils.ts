import { iNestedName } from "../../../models/NestedNames";

export const getNameStr = (nameItem: iNestedName, collapsed: boolean) => {
  if (!nameItem.children) return `• ${nameItem.name}`;
  return collapsed ? `▶ ${nameItem.name}` : `▼ ${nameItem.name}`;
};
