import { Outlet, createBrowserRouter } from "react-router-dom";
import { Login } from "../components/Auth/Login";
import ErrorPage from "./ErrorPage";
import { BannerPage, AlbumPage, MediaPage } from "../page/Dashboard";
import { DashboardLayout } from "../components/Dashboard/Layout";
import {
  ProductCreate,
  ProductDetail,
  ProductEdit,
  ProductMain,
} from "../components/Dashboard/Product";
import { CategoryMain } from "../components/Dashboard/Category";
import { AuthLayout } from "../components/Auth/Layout";
import { AuthProvider } from "../components/Auth/Context";
import { ProtectedRoute } from "../components/Auth/component";
export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthProvider>
        <Outlet />
      </AuthProvider>
    ),
    children: [
      {
        path: "auth",
        element: <AuthLayout />,
        children: [
          {
            path: "login",
            element: <Login />,
          },
        ],
      },
      {
        path: "",
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
            path: "media",
            element: <MediaPage />,
          },
          {
            path: "product",
            children: [
              {
                path: "",
                element: <ProductMain />,
              },
              {
                path: "create",
                element: <ProductCreate />,
              },
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
    ],
  },
]);
export default router;
