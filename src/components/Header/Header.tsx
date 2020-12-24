import React from "react";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { Socials } from "../Socials/Socials";
import { Person } from "../Person/Person";
import { Icon } from "../Icon/Icon";
import styles from "./Header.module.scss";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <Socials fill="white" />
      </div>
      <BurgerMenu />
      <Person />
      <Icon name="arrow-down" fill="white" size="1.5625rem" />
    </header>
  );
};
