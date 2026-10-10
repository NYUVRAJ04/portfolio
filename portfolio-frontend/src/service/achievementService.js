import apiClient from "../api/axiosClient";
import { getListResponse } from "../api/response";

export const getAchievements = async () => {
  const response = await apiClient.get("/achievements");
  return getListResponse(response.data);
};