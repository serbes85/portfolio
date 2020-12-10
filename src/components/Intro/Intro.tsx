import React from "react";
import { Socials } from "../Socials/Socials";
import { Person } from "../Person/Person";
import { Button } from "../Button/Button";
import styles from "./Intro.module.scss";

export const Intro: React.FC = () => {
  const buttons = [
    <Button buttonText="Мои работы" appearence="left" />,
    <Button buttonText="Обо мне" />,
    <Button buttonText="Блог" appearence="right" />,
  ];
  const listItems = buttons.map((item, index) => (
    <li className={styles.item} key={index}>
      {item}
    </li>
  ));

  return (
    <div className={styles.content}>
      <Person />
      <Socials />
      <ul className={styles.buttons}>{listItems}</ul>
      <Button buttonText="Авторизоваться" appearence="authorize" />
    </div>
  );
};
