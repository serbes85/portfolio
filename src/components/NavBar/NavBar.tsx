import React from "react";
import { Link } from "react-router-dom";
import { NavBarProps, LinkData } from "./interfaces";
import styles from "./NavBar.module.scss";

const getLinkList = (links: LinkData[]) => {
  return links.map(({ id, path, name }) => (
    <li key={id} className={styles.item}>
      <Link to={path} className={styles.link}>
        <span>{name}</span>
      </Link>
    </li>
  ));
};

export const NavBar: React.FC<NavBarProps> = ({ links }) => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>{getLinkList(links)}</ul>
    </nav>
  );
};
