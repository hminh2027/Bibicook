import { ACCESS_TOKEN } from "@/config";
const storage = {
  getToken: () => {
    return JSON.parse(window.localStorage.getItem(`${ACCESS_TOKEN}`) as string);
  },
  setToken: (token: string) => {
    window.localStorage.setItem(`${ACCESS_TOKEN}`, JSON.stringify(token));
  },
  clearToken: () => {
    window.localStorage.removeItem(`${ACCESS_TOKEN}`);
  },
};

export default storage;
