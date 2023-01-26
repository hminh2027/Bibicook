import { apiClient } from "../api";

const url = "banner";

export const bannerEndpoint = {
  post: async (data) => {
    return await apiClient.post(url, data);
  },
};
