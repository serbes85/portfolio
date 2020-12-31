import React, { FC } from "react";
import { Link } from "react-router-dom";
import { LinkData } from "./interfaces";
import styles from "./NavBarVertical.module.scss";

import { links } from "./constants";

const getLinkList = (links: LinkData[]) => {
  return links.map(({ id, path, name }) => (
    <li key={id} className={styles.item}>
      <Link to={path} className={styles.link}>
        <span className={styles.text}>{name}</span>
      </Link>
    </li>
  ));
};

export const NavBarVertical: FC = () => {
  return <ul className={styles.list}>{getLinkList(links)}</ul>;
};
