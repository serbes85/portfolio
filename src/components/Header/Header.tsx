import React from "react";
import { Person } from "../Person/Person";
import { Socials } from "../Socials/Socials";
import { Icon } from "../Icon/Icon";
import styles from "./Header.module.scss";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <Socials fill="white" />
        <div className={styles.burger}>
          <div className={styles.line} />
          <div className={styles.line} />
          <div className={styles.line} />
        </div>
      </div>
      <Person />
      <Icon name="arrow-down" fill="white" size="1.5625rem" />
    </header>
  );
};
