import apiClient from "../api/axiosClient";
import { getListResponse } from "../api/response";

export const getSkills = async () => {
  const response = await apiClient.get("/skills");
  return getListResponse(response.data);
};

export const getSkillsByCategory = async (category) => {
  const response = await apiClient.get(`/skills/${encodeURIComponent(category)}`);
  return getListResponse(response.data);
};