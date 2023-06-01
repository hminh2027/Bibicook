import { useRoutes } from "react-router-dom";

import { Landing, NotFound, Test } from "@/features/misc";
import { useAuth } from "@/features/Auth";

import { protectedRoutes } from "./protected";
import { publicRoutes } from "./public";
import UserPage from "@/features/User/routes/UserPage";
import PostDetail from "@/features/Post/routes/PostDetail";

export const AppRoutes = () => {
  const auth = useAuth();

  const commonRoutes = [
    { path: "/", element: <Landing /> },
    { path: "/user/:id", element: <UserPage /> },
    { path: "/post/:slug", element: <PostDetail /> },
    { path: "/test", element: <Test /> },
    { path: "*", element: <NotFound /> },
  ];

  const routes = auth.user ? protectedRoutes : publicRoutes;

  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{element}</>;
};
