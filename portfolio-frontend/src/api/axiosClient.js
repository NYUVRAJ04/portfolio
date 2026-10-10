import axios from "axios";

const configuredBaseUrl = (import.meta.env.VITE_API_BASE_URL || "/v1").replace(/\/+$/, "");
const API_BASE_URL = configuredBaseUrl.endsWith("/v1")
  ? configuredBaseUrl
  : `${configuredBaseUrl}/v1`;

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

if (import.meta.env.DEV) {
  apiClient.interceptors.request.use((config) => {
    console.debug("API request:", config.method?.toUpperCase(), config.url);
    return config;
  });
}

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error(
      "API request error:",
      error?.config?.method?.toUpperCase(),
      error?.config?.url,
      error?.response?.status,
      error?.response?.data || error?.message
    );
    return Promise.reject(error);
  }
);

export default apiClient;

