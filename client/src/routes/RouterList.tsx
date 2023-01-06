import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "../page/auth";
import ErrorPage from "./ErrorPage";
import { BannerPage, AlbumPage } from "../page/Dashboard";
import { DashboardLayout } from "../components/Dashboard/Layout";
export const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "banner",
        element: <BannerPage />,
      },
      {
        path: "album",
        element: <AlbumPage />,
      },
    ],
  },
]);
export default router;
