import React, { FC, useState } from "react";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { ModalWindow } from "../ModalWindow/ModalWindow";
import { Socials } from "../Socials/Socials";
import { Person } from "../Person/Person";
import { Icon } from "../Icon/Icon";
import styles from "./Header.module.scss";

export const Header: FC = () => {
  const [isActive, setIsActive] = useState(false);

  const hahdleClickSetActiveClass = () => {
    setIsActive(!isActive);
  };

  return (
    <header className={styles.header}>
      {isActive && <ModalWindow isActive={isActive} />}
      <div className={styles.content}>
        <Socials fill="white" />
        <BurgerMenu
          isActive={isActive}
          hahdleClickSetActiveClass={hahdleClickSetActiveClass}
        />
      </div>
      <Person />
      <Icon name="arrow-down" fill="white" size="1.5625rem" />
    </header>
  );
};
