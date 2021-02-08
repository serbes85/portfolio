import { FC } from "react";
import { RouteComponentProps } from "react-router";

export interface PrivateRouteProps {
    path: string;
    isAuthorized: boolean;
    component: FC<RouteComponentProps>;
}