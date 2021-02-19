import React, { FC, useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { PrivateRouteProps } from "./interfaces";
import { observer } from "mobx-react";
import AuthStore from "../../stories/AuthStore";

const PrivateRoute: FC<PrivateRouteProps> = ({
  component: RouteComponent,
  ...rest
}) => {
  const authStore = useContext(AuthStore);
  const { isAuthorized } = authStore;

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthorized ? <RouteComponent {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default observer(PrivateRoute);
