import { apiClient } from "../api";

const url = "media";

export const mediaEndpoint = {
  get: async () => {
    return await apiClient.get(url);
  },
  post: async (formData: FormData) => {
    return await apiClient.post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
};
