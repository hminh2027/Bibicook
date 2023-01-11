import { Outlet, createBrowserRouter } from "react-router-dom";
import { LoginPage } from "../page/auth";
import ErrorPage from "./ErrorPage";
import { BannerPage, AlbumPage } from "../page/Dashboard";
import { DashboardLayout } from "../components/Dashboard/Layout";
import {
  ProductCreate,
  ProductDetail,
  ProductEdit,
  ProductMain,
} from "../components/Dashboard/Product";
import { CategoryMain } from "../components/Dashboard/Category";
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
            <ProductMain />
          </>
        ),
      },
      {
        path: "product/create",
        element: <ProductCreate />,
      },
      {
        path: "product/:id",
        element: <ProductDetail />,
      },
      {
        path: "product/:id/edit",
        element: <ProductEdit />,
      },
      {
        path: "category",
        element: (
          <>
            <CategoryMain />
            <Outlet />
          </>
        ),
      },
    ],
  },
]);
export default router;
