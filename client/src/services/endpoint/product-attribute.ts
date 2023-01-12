import { apiClient } from "../api";

const endpoint = "/attribute";
export const productAttributeApi = {
  getAll: async (params?: any) => {
    return await apiClient.get(endpoint, params);
  },
  getById: async (id: string | number) => {
    return await apiClient.get(`${endpoint}/${id}`);
  },
  create: async (name: string) => {
    return await apiClient.post(endpoint, { name });
  },
  delete: async (id: string | number) => {
    return await apiClient.delete(`${endpoint}/${id}`);
  },
};
export default productAttributeApi;
