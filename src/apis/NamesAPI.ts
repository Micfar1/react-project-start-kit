import { fetchData } from "./data";
import { iNestedNames } from "../models/NestedNames";

export const getNames = async (): Promise<iNestedNames> => {
  try {
    const names: iNestedNames = await fetchData();
    return names;
  } catch (error) {
    console.error(error);
  }

  return [];
};
