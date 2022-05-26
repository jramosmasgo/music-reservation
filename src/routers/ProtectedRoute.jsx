import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ company = false, children }) => {
  const stateAuth = useSelector((state) => state.auth);

  if (!stateAuth.name) {
    if (company) {
      return <Navigate to="/not-found" />;
    }
    return <Navigate to="/login" replace />;
  }

  if (company) {
    if (!stateAuth.companyCreator) {
      return <Navigate to="/not-found" replace />;
    }
  }

  return children;
};
