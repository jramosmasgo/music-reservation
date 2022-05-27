import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ company = false, children }) => {
  const auth = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

  if (!auth) {
    if (company) {
      return <Navigate to="/not-found" />;
    }
    return <Navigate to="/login" replace />;
  }

  if (company) {
    if (!auth.companyCreator) {
      return <Navigate to="/not-found" replace />;
    }
  }

  return children;
};
