import React from "react";
import { Title } from "../Title/Title";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import styles from "./LoginForm.module.scss";
import { LoginFormProps } from "./interfaces";

export const LoginForm: React.FC<LoginFormProps> = ({
  className,
  handleClickFlipped,
}) => {
  return (
    <form className={className}>
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
          <label htmlFor="human">
            <input type="checkbox" name="human" />Я человек
          </label>
        </div>
        <p className={styles.text}>Вы точно не робот?</p>
        <div className={styles.control}>
          <label htmlFor="yes">
            <input type="radio" value="yes" name="answer" />
            Да
          </label>
          <label htmlFor="no">
            <input type="radio" value="no" name="answer" />
            Не уверен
          </label>
        </div>
      </div>
      <div className={styles.buttons}>
        <Button
          buttonText="На главную"
          appearance="borderRadiusLeft"
          onClick={handleClickFlipped}
        />
        <Button buttonText="Войти" appearance="borderRadiusRight" />
      </div>
    </form>
  );
};
