import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const stateAuth = useSelector((state) => state.auth);

  if (!stateAuth.name) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
