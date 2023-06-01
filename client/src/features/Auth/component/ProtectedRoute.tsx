import { Navigate } from "react-router-dom";
import { useAuth } from "../Context";

export const ProtectedRoute = ({ children }) => {
  const { user }: any = useAuth();
  if (!user) {
    // user is not authenticated
    return <Navigate to="/" />;
  }
  return children;
};
export default ProtectedRoute;
