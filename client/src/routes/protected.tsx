import { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { lazyImport } from "@/utils/lazyImport";
import { Container, Spinner } from "@chakra-ui/react";
import { AddPost } from "@/features/Post/components/Form";
import { ContentLayout, ManageLayout } from "@/components/Layout";
import EditPostPage from "@/features/Post/routes/EditPostPage";
import PostTablePage from "@/features/Post/routes/PostTablePage";
const { Dashboard } = lazyImport(() => import("@/features/misc"), "Dashboard");
// const { Profile } = lazyImport(() => import("@/features/users"), "Profile");
// const { Users } = lazyImport(() => import("@/features/users"), "Users");

const App = () => {
  return (
    <div>
      <Suspense
        fallback={
          <div className="h-full w-full flex items-center justify-center">
            <Spinner size="xl" />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </div>
  );
};

export const protectedRoutes = [
  {
    path: "manage",
    element: <App />,
    children: [
      { path: "", element: <Dashboard /> },
      {
        path: "post",
        element: <PostTablePage />,
      },
      {
        path: "post/create",
        element: (
          <ManageLayout title="Tạo bài đăng">
            <Container maxW={"container.lg"}>
              <AddPost />
            </Container>
          </ManageLayout>
        ),
      },
      {
        path: "post/:slug/edit",
        element: <EditPostPage />,
      },
      { path: "*", element: <Navigate to="." /> },
    ],
  },
];
