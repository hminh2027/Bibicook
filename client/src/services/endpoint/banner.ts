import { apiClient } from "../api";

const url = "banner";

export const bannerEndpoint = {
  post: async (formData: FormData) => {
    return await apiClient.request({
      url,
      data: formData,
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
};
