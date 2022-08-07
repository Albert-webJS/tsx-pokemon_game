import { Route, Navigate } from "react-router-dom";
import { PrivateRouteProps } from "./PrivateRoute.props";

export const PrivateRoute = ({
  component,
  ...rest
}: PrivateRouteProps): JSX.Element => {
  return (
    <Route
      {...rest}
      element={
        localStorage.getItem("idToken") ? (
          component
        ) : (
          <Navigate replace to="/" />
        )
      }
    />
  );
};
