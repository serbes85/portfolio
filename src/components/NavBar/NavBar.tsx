import React, { FC } from "react";
import { Link } from "react-router-dom";
import { NavBarProps, LinkData } from "./interfaces";

const getLinkList = (links: LinkData[]) => {
  return links.map(({ id, path, name }) => (
    <li key={id} className="item">
      <Link to={path} className="link">
        <span className="text">{name}</span>
      </Link>
    </li>
  ));
};

export const NavBar: FC<NavBarProps> = ({ links }) => {
  return <ul className="list">{getLinkList(links)}</ul>;
};
