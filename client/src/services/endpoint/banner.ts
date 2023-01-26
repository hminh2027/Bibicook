import { apiClient } from "../api";

const url = "banner";

export const bannerEndpoint = {
  post: async (formData: FormData) => {
    return await apiClient.post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
};
