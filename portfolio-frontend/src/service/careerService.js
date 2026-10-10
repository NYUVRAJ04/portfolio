import apiClient from "../api/axiosClient";
import { getListResponse, getObjectResponse } from "../api/response";

export const getCareer = async () => {
  const response = await apiClient.get("/career");
  return getListResponse(response.data);
};

export const getCareerById = async (id) => {
  const response = await apiClient.get(`/career/${id}`);
  return getObjectResponse(response.data);
};

export const getMissions = async (experienceId) => {
  const response = await apiClient.get(
    `/career/${experienceId}/missions`
  );
  return getListResponse(response.data);
};