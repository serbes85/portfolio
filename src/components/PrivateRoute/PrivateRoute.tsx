import React, { FC } from "react";
import { Route, Redirect } from "react-router-dom";
import { PrivateRouteProps } from "./interfaces";
import { getIsAuthorized } from "../../modules/auth";
import { connect } from "react-redux";

const PrivateRoute: FC<PrivateRouteProps> = ({
  isAuthorized,
  component: RouteComponent,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthorized ? <RouteComponent {...props} /> : <Redirect to="/" />
      }
    />
  );
};

const mapStateToProps = (state: boolean) => ({
  isAuthorized: getIsAuthorized(state),
});

export default connect(mapStateToProps)(PrivateRoute);
