import React, { FC, useState } from "react";
import { Header } from "../Header/Header";
import { Person } from "../Person/Person";
import { Icon } from "../Icon/Icon";
import { ModalWindow } from "../ModalWindow/ModalWindow";
import styles from "./Hero.module.scss";

export const Hero: FC = () => {
  const [isActive, setIsActive] = useState(false);

  const hahdleClickSetActiveClass = () => {
    setIsActive(!isActive);
  };

  return (
    <section className={styles.hero}>
      <Header
        isActive={isActive}
        hahdleClickSetActiveClass={hahdleClickSetActiveClass}
      />
      <Person />
      <Icon name="arrow-down" fill="white" size="1.5625rem" />
      <ModalWindow isActive={isActive} />
    </section>
  );
};
