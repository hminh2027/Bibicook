import axios from "axios";

// Set up default config for http requests here
// Please have a look at here `https://github.com/axios/axios#request-config` for the full list of configs
export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
export const setToken = (token: string) => {
  apiClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

apiClient.interceptors.request.use(async (config) => {
  // Handle token here ...

  return config;
});

apiClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    // Handle errors
    console.log(error);
    throw error;
  }
);
export default apiClient;
