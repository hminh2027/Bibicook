import { apiClient } from "../api";

const url = "";

export const authEndpoint = {
  signIn: async ({ username, password }) => {
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ name: "User 1", role: "Admin" });
      }, 2000);
    });

    //  await apiClient.post(
    //   url,
    //   { username, password },
    //   {
    //     url: "https://run.mocky.io/v3/f0420205-468c-4406-8ecb-3e0b42a01b36",
    //   }
    // );
  },
  getMe: async () => {
    return await apiClient.get(
      "https://run.mocky.io/v3/f0420205-468c-4406-8ecb-3e0b42a01b36"
    );
  },
};
