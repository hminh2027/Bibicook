import axios, { InternalAxiosRequestConfig } from "axios";
import { onSuccess, onError } from "./interceptors";
import storage from "@/utils/storage";

const apiClient = axios.create({
  baseURL: "http://localhost:3000/api/",
  withCredentials: true,
});

function authRequestInterceptor(config: InternalAxiosRequestConfig) {
  const token = storage.getToken();
  if (token) {
    config.headers.authorization = `${token}`;
  }
  config.headers.Accept = "application/json";
  return config;
}

axios.interceptors.request.use(authRequestInterceptor);
axios.interceptors.response.use(
  (response) => onSuccess(response),
  (error) => onError(error)
);
export default apiClient;
