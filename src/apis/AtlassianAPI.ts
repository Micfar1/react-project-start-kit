import { fetchData } from "./data";
import { iAtlassianResponses } from "../models/Atlassian";

export const getAtlassionData = async (): Promise<iAtlassianResponses> => {
  try {
    const names: iAtlassianResponses = await fetchData();
    return names;
  } catch (error) {
    console.error(error);
  }

  return [];
};
