import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Context";

interface Props {}

export const AuthLayout = (props: Props) => {
  const { user } = useAuth();
  if (user) return <Navigate to={"/"} replace={true} />;
  return (
    <div className="h-screen w-screen grid place-items-center">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
