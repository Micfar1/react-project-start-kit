import { iAtlassianResponse } from "../../../models/Atlassian";

export const getPrependedChar = (
  topicItem: iAtlassianResponse,
  collapsed: boolean
) => {
  if (!topicItem.children) return "•";
  if (collapsed) return "▶";
  return "▼";
};
