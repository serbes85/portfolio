import { FC } from "react";
import { RouteComponentProps } from "react-router";

export interface PrivateRouteProps {
    path: string;
    component: FC<RouteComponentProps>;
}