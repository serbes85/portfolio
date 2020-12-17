import React from "react";
import { Intro } from "../components/Intro/Intro";
import { LoginForm } from "../components/LoginForm/LoginForm";
import { Button } from "../components/Button/Button";
import styles from "./WelcomePage.module.scss";
import classNames from "classnames";

export const WelcomePage: React.FC = () => {
  return (
    <div className="intro">
      <div className={classNames(styles.card, styles.transform)}>
        <Intro className={styles.cardFront} />
        <LoginForm className={styles.cardBack} />
      </div>
      <Button buttonText="Авторизоваться" appearance="authorize" />
    </div>
  );
};
