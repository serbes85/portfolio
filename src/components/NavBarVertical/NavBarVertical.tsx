import React, { FC } from "react";
import { NavBarVerticalProps } from "./interfaces";
import "./NavBarVertical.scss";

export const NavBarVertical: FC<NavBarVerticalProps> = ({ render, links }) => {
  return <nav className="NavBarVertical">{render(links)}</nav>;
};
