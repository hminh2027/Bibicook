import { apiClient } from "../api";

const url = "category";

export const categoryEndpoint = {
  get: async () => await apiClient.get(url),
  post: async (data) => {
    return await apiClient.post(url, data);
  },
  delete: async (slug) => {
    return await apiClient.delete(`${url}/${slug}`);
  },
};
