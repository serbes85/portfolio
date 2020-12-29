import React, { FC } from "react";
import { NavBarHorizontalProps } from "./interfaces";
import "./NavBarHorizontal.scss";

export const NavBarHorizontal: FC<NavBarHorizontalProps> = ({
  render,
  links,
}) => {
  return <nav className="NavBarHorizontal">{render(links)}</nav>;
};
