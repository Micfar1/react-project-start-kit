export interface iAtlassianResponse {
  id: string;
  name: string;
  children?: iAtlassianResponses;
}

export type iAtlassianResponses = iAtlassianResponse[];
