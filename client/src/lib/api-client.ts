import axios, { InternalAxiosRequestConfig } from "axios";
import { onSuccess, onError } from "./interceptors";
import storage from "@/utils/storage";

const privateClient = axios.create({
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

privateClient.interceptors.request.use(authRequestInterceptor);
privateClient.interceptors.response.use(
  (response) => onSuccess(response),
  (error) => onError(error)
);
export { privateClient, publicApiClient };

export default publicApiClient;
