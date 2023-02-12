import { apiClient } from "./../api";

const url = "attribute";

export const attributeEnpoint = {
  get: async () => {
    return apiClient.get(url);
  },
  post: async (data) => {
    return apiClient.post(url, data);
  },
};
