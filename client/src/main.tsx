import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "antd/dist/reset.css";
import "./index.css";
import { LoginPage } from "./page/auth";
const router = createBrowserRouter([
  {
    path: "/auth",
    element: <LoginPage />,
  },
]);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
