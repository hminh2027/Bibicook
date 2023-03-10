import { apiClient } from "../api";

const url = "banner";

export const bannerEndpoint = {
  get: async () => await apiClient.get(url),
  post: async (data) => {
    return await apiClient.post(url, data);
  },
  remove: async (id) => {
    return await apiClient.delete(`${url}/${id}`);
  },
};
