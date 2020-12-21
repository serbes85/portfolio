import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.scss";

export const NavBar: React.FC = () => {
  const links = [
    { id: 0, name: "Мои работы", path: "works" },
    { id: 1, name: "Обо мне", path: "about" },
    { id: 2, name: "Блог", path: "blog" },
  ];
  const linksList = links.map((item) => (
    <li key={item.id} className={styles.item}>
      <Link to={item.path} className={styles.link}>
        <span>{item.name}</span>
      </Link>
    </li>
  ));
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>{linksList}</ul>
    </nav>
  );
};
