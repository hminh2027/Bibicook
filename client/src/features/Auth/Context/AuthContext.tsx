import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks";
import { authEndpoint } from "../../../services/endpoint";
import { setToken, clearToken } from "../../../services";
import _ from "lodash";
import { useCookie } from "react-use";
const AuthContext = createContext({
  user: {
    username: "",
    email: "",
  },
  login: async (data) => {},
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  useEffect(() => {}, []);
  // call this function when you want to authenticate the user
  const login = async (data) => {
    try {
      const { user, accessToken, refreshToken }: any = await authEndpoint.login(
        data
      );

      navigate("/");
    } catch (error) {
      throw new Error(error);
    }
  };

  // call this function to sign out logged in user
  const logout = async () => {
    navigate("/auth/login", { replace: true });

    await authEndpoint.logout();
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
