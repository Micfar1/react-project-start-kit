import { fetchData } from "./data";
import { iAtlassianResponses } from "../models/Atlassian";

export const getAtlassionData = async (): Promise<iAtlassianResponses> => {
  try {
    const atlassianResponses: iAtlassianResponses = await fetchData();
    return atlassianResponses;
  } catch (error) {
    console.error(error);
  }

  return [];
};
