import React from "react";
import { Title } from "../Title/Title";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import styles from "./LoginForm.module.scss";
import { LoginFormProps } from "./interfaces";

export const LoginForm: React.FC<LoginFormProps> = ({
  className,
  handleClickFlippedFont,
}) => {
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
        <div className={styles.controlButtons}>
          <div className={styles.control}>
            <input
              type="checkbox"
              className={styles.customCheckbox}
              name="human"
              id="human"
            />
            <label htmlFor="human">Я человек</label>
          </div>
          <span className={styles.text}>Вы точно не робот?</span>
          <div className={styles.control}>
            <input
              type="radio"
              value="yes"
              name="answer"
              id="yes"
              className={styles.customRadio}
            />
            <label htmlFor="yes">Да</label>
            <input
              type="radio"
              value="no"
              name="answer"
              id="no"
              className={styles.customRadio}
            />
            <label htmlFor="no"> Не уверен</label>
          </div>
        </div>
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
