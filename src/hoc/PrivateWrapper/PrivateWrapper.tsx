import { Navigate,Outlet } from "react-router-dom";

export const PrivateWrapper = (): React.ReactElement | null => {
  console.log(localStorage.getItem("idToken"));
  return localStorage.getItem("idToken") ? <Outlet /> : <Navigate to="/" />;
};