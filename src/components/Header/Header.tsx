import React from "react";
import { Avatar } from "../Avatar/Avatar";
import { Socials } from "../Socials/Socials";
import { Icon } from "../Icon/Icon";
import styles from "./Header.module.scss";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.links}>
        <Socials fill="white" />
        <div className={styles.burger}>
          <div className={styles.line} />
          <div className={styles.line} />
          <div className={styles.line} />
        </div>
      </div>
      <Avatar />
      <Icon name="arrow-down" size="1.5625rem" />
    </header>
  );
};
