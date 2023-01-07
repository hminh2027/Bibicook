import { Outlet, createBrowserRouter } from "react-router-dom";
import { LoginPage } from "../page/auth";
import ErrorPage from "./ErrorPage";
import { BannerPage, AlbumPage } from "../page/Dashboard";
import { DashboardLayout } from "../components/Dashboard/Layout";
import { ProductDetail, ProductEdit } from "../components/Dashboard/Product";
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
      {
        path: "product",
        element: (
          <>
            <Outlet />
          </>
        ),
        children: [
          {
            path: ":id",
            element: <ProductDetail />,
          },
          {
            path: ":id/edit",
            element: <ProductEdit />,
          },
        ],
      },
    ],
  },
]);
export default router;
