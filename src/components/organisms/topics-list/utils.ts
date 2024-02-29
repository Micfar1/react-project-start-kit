import { iAtlassianResponse } from "../../../models/Atlassian";

export const getTopicListStr = (
  topicItem: iAtlassianResponse,
  collapsed: boolean
) => {
  if (!topicItem.children) return `• ${topicItem.name}`;
  return collapsed ? `▶ ${topicItem.name}` : `▼ ${topicItem.name}`;
};
