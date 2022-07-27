import { Route, Navigate } from "react-router-dom";

export const PrivateRoute = ({
  component: Component,
  ...rest
}: any): JSX.Element => {
  return (
    <Route
      {...rest}
      element={
        localStorage.getItem("idToken") ? (
          <Component />
        ) : (
          <Navigate replace to="/" />
        )
      }
    />
  );
};
