import apiClient from "../api/axiosClient";
import { getListResponse } from "../api/response";

export const getEducation = async () => {
  const response = await apiClient.get("/education");
  return getListResponse(response.data);
};