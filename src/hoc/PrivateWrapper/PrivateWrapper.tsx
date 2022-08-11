import { Navigate,Outlet } from "react-router-dom";

export const PrivateWrapper = (): React.ReactElement | null => {
  return localStorage.getItem("idToken") ? <Outlet /> : <Navigate to="/" />;
};