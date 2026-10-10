export const getListResponse = (payload) => {
  if (Array.isArray(payload)) {
    return payload;
  }

  if (Array.isArray(payload?.data)) {
    return payload.data;
  }

  throw new TypeError("The API returned an invalid list response.");
};

export const getObjectResponse = (payload) => {
  const data = payload?.data ?? payload;

  if (data && typeof data === "object" && !Array.isArray(data)) {
    return data;
  }

  throw new TypeError("The API returned an invalid object response.");
};

export const getApiErrorMessage = (error) =>
  error?.response?.data?.message ||
  error?.response?.data?.error ||
  error?.message ||
  "The request failed. Please try again.";
