import apiClient from "../api/axiosClient";
import { getObjectResponse } from "../api/response";

export const getProfile = async () => {
  const response = await apiClient.get("/profile");
  return getObjectResponse(response.data);
};