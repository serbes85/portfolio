import React, { FC } from "react";
import { Socials } from "../Socials/Socials";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { HeaderProps } from "./interfaces";
import styles from "./Header.module.scss";

export const Header: FC<HeaderProps> = ({
  isActive,
  hahdleClickSetActiveClass,
}) => {
  return (
    <header className={styles.header}>
      <Socials fill="white" />
      <BurgerMenu
        isActive={isActive}
        hahdleClickSetActiveClass={hahdleClickSetActiveClass}
      />
    </header>
  );
};
