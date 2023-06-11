import axios, { InternalAxiosRequestConfig } from "axios";
import { onSuccess, onError } from "./interceptors";
import storage from "@/utils/storage";

const authClient = axios.create({
  baseURL: "http://localhost:3000/api/",
  withCredentials: true,
});
const publicApiClient = axios.create({
  baseURL: "http://localhost:3000/api/",
});

function authRequestInterceptor(config: InternalAxiosRequestConfig) {
  const token = storage.getToken();
  if (token) {
    config.headers.authorization = `${token}`;
  }
  config.headers.Accept = "application/json";
  return config;
}

authClient.interceptors.request.use(authRequestInterceptor);
authClient.interceptors.response.use(
  (response) => onSuccess(response),
  (error) => onError(error)
);
export { authClient, publicApiClient };

export default publicApiClient;
