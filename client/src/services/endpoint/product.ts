import { apiClient } from "./../api";

const url = "product";

export const productEndpoint = {
  get: async () => {
    return await apiClient.get(url);
  },
  getBySlug: async (slug) => {
    return await apiClient.get(`${url}/${slug}`);
  },
  post: async (data) => {
    return await apiClient.post(url, data);
  },
  update: async (data, slug) => {
    return await apiClient.patch(`${url}/${slug}`, data);
  },
  delete: async (slug) => {
    return await apiClient.delete(`${url}/${slug}`);
  },
};
