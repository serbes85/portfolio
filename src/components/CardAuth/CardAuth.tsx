import React from "react";
import { CardAuthProps } from "./interfaces";
import { Title } from "../Title/Title";
import { LoginForm } from "../LoginForm/LoginForm";
import { ControlButtons } from "../ControlButtons/ControlButtons";
import { Button } from "../Button/Button";
import styles from "./CardAuth.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export const CardAuth: React.FC<CardAuthProps> = ({
  handleClickFlippedFont,
  isFlipped,
}) => {
  const className = cx({
    cardAuth: true,
    flipped: isFlipped,
  });
  return (
    <div className={className}>
      <div className={styles.auth}>
        <Title text="Авторизуйтесь" />
        <LoginForm />
        <ControlButtons />
      </div>
      <nav className={styles.nav}>
        <Button
          type="button"
          buttonText="На главную"
          appearance="borderRadiusLeft"
          onClick={handleClickFlippedFont}
        />
        <Button buttonText="Войти" appearance="borderRadiusRight" />
      </nav>
    </div>
  );
};
