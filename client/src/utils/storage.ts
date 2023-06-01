const storagePrefix = "realtor_";

const storage = {
  getToken: () => {
    const token = window.localStorage.getItem(`${storagePrefix}token`);

    return token != undefined ? token : undefined;
  },
  setToken: (token: string) => {
    window.localStorage.setItem(`${storagePrefix}token`, token);
  },
  clearToken: () => {
    window.localStorage.removeItem(`${storagePrefix}token`);
  },
};

export default storage;
