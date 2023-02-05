import axios from "axios";

// Set up default config for http requests here
// Please have a look at here `https://github.com/axios/axios#request-config` for the full list of configs
export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
export const setToken = () => {
  // get;
};
export const clearToken = () => {
  delete apiClient.defaults.headers.common["Authorization"];
};
apiClient.interceptors.request.use(async (config) => {
  // Handle token here ...
  // setToken();

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
    if (error && error.response.data) {
      throw error.response.data;
    }
    throw error;
  }
);
export default apiClient;
