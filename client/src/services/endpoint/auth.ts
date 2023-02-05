import { apiClient } from "../api";

const url = "auth";
interface UserCredential {
  username: string;
  password: string;
}
interface UserSignUp extends UserCredential {
  email: string;
}
export const authEndpoint = {
  login: async (userCredential: UserCredential) => {
    return await apiClient.post(`${url}/login`, userCredential);
  },
  signUp: async (userSignUpData: UserSignUp) => {
    return await apiClient.post(`${url}/signup`, userSignUpData);
  },
  getMe: async () => {
    return await apiClient.get("account");
  },
};
