import apiClient from "../api/axiosClient";
import { getListResponse, getObjectResponse } from "../api/response";

export const getProjects = async () => {
  const response = await apiClient.get("/projects");
  return getListResponse(response.data);
};

export const getProjectById = async (id) => {
  const response = await apiClient.get(`/projects/${id}`);
  return getObjectResponse(response.data);
};