import { useRouter } from "next/router";
import { useAuth } from "../Context";

export const ProtectedRoute = ({ children }) => {
  const { user }: any = useAuth();
  const router = useRouter();
  if (!user) {
    router.replace("/");
  }
  return children;
};
export default ProtectedRoute;
