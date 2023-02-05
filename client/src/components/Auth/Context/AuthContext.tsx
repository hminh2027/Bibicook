import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks";
import { authEndpoint } from "../../../services/endpoint";
import { setToken, clearToken } from "../../../services";
import _ from "lodash";
import { useCookie } from "react-use";
const AuthContext = createContext({
  user: {},
  login: async (data) => {},
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);
  const [accessToken, updateAccessToken, deleteAccessToken] =
    useCookie("accessToken");
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      const me = await authEndpoint.getMe();
      console.log("ME:", me);
      if (!_.isEmpty(me)) setUser(me);
      else logout();
    })();
  }, []);
  // call this function when you want to authenticate the user
  const login = async (data) => {
    try {
      const { user, accessToken, refreshToken }: any = await authEndpoint.login(
        data
      );
      // updateAccessToken(accessToken);
      // localStorage.setItem("accessToken", accessToken);
      // localStorage.setItem("refreshToken", refreshToken);
      setUser(user);
      navigate("/");
    } catch (error) {
      throw new Error(error);
    }
  };

  // call this function to sign out logged in user
  const logout = () => {
    clearToken();
    deleteAccessToken();
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setUser(null);
    navigate("/auth/login", { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
