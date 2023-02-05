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
  const [refreshToken, updateRefreshToken, deleteRefreshToken] =
    useCookie("refreshToken");
  const navigate = useNavigate();
  useEffect(() => {
    const fetchMe = async () => {
      try {
        const me = await authEndpoint.getMe();
        console.log(me);
        if (!_.isEmpty(me)) setUser(me);
      } catch (error) {
        logout();
      }
    };
    fetchMe();
  }, []);
  // call this function when you want to authenticate the user
  const login = async (data) => {
    try {
      const { user, accessToken, refreshToken }: any = await authEndpoint.login(
        data
      );
      updateRefreshToken(refreshToken);
      setUser(user);
      navigate("/");
    } catch (error) {
      throw new Error(error);
    }
  };

  // call this function to sign out logged in user
  const logout = async () => {
    navigate("/auth/login", { replace: true });
    deleteRefreshToken();
    setUser(null);
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
