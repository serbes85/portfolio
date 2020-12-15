import React from "react";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import styles from "./LoginForm.module.scss";
import classNames from "classnames";
// import { LoginFormProps } from "./interfaces";

export const LoginForm: React.FC = () => {
  return (
    <form className={styles.form}>
      <h1 className="title">Авторизуйтесь</h1>
      <div className={styles.login}>
        <label htmlFor="userName">
          <Icon name="login" fill="#949f99" size="1.25rem" />
        </label>
        <input
          className={classNames(styles.input)}
          name="userName"
          id="user-name"
          type="text"
          placeholder="Логин"
        />
      </div>
      <div className={styles.password}>
        <label htmlFor="userPassword">
          <Icon name="password" fill="#949f99" size="1.25rem" />
          <input
            className={classNames(styles.input)}
            name="userPassword"
            id="user-password"
            type="password"
            placeholder="Пароль"
          />
        </label>
      </div>
      <div className={styles.radioButtons}>
        <label>
          <input type="checkbox" />
          <span>Я человек</span>
        </label>
        <p>Вы точно не робот</p>
        <label>
          <input className="with-gap" name="group1" type="radio" />
          <span>Да</span>
        </label>
        <label>
          <input className="with-gap" name="group1" type="radio" />
          <span>Не уверен</span>
        </label>
      </div>
      <div className={styles.buttons}>
        <Button buttonText="На главную" appearance="borderRadiusLeft" />
        <Button buttonText="Войти" appearance="borderRadiusRight" />
      </div>
    </form>
  );
};
