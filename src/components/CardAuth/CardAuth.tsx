import React from "react";
import { Title } from "../Title/Title";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import { ControlButtons } from "../ControlButtons/ControlButtons";
import { CardAuthProps } from "./interfaces";
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
    <form className={className}>
      <div className={styles.auth}>
        <Title text="Авторизуйтесь" />
        <div className={styles.login}>
          <label htmlFor="userName">
            <Icon
              name="login"
              fill="#949f99"
              size="1.25rem"
              className={styles.icon}
            />
            <input
              className={styles.input}
              name="userName"
              id="user-name"
              type="text"
              placeholder="Логин"
            />
          </label>
        </div>
        <div className={styles.password}>
          <label htmlFor="userPassword">
            <Icon
              name="password"
              fill="#949f99"
              size="1.25rem"
              className={styles.icon}
            />
            <input
              className={styles.input}
              name="userPassword"
              id="user-password"
              type="password"
              placeholder="Пароль"
            />
          </label>
        </div>
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
    </form>
  );
};
