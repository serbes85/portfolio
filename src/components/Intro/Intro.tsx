import React from "react";
import { Socials } from "../Socials/Socials";
import { Person } from "../Person/Person";
import { Button } from "../Button/Button";
import styles from "./Intro.module.scss";
import { IntroProps } from "./interfaces";

export const Intro: React.FC<IntroProps> = ({ className }) => {
  return (
    <div className={className}>
      <div className={styles.hero}>
        <Person />
        <Socials />
      </div>
      <nav className={styles.nav}>
        <Button buttonText="Мои работы" appearance="borderRadiusLeft" />
        <Button buttonText="Обо мне" appearance="borderRight" />
        <Button buttonText="Блог" appearance="borderRadiusRight" />
      </nav>
    </div>
  );
};
