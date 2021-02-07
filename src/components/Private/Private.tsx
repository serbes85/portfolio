import React, { FC } from "react";
import { Route } from "react-router-dom";
import { Admin } from "../../pages/Admin/Admin";

const Private: FC = (props) => {
  return <Route path="/admin" component={Admin} />;
};

export default Private;
