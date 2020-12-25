import React from "react";
import { Icon } from "../Icon/Icon";
import styles from "./LoginForm.module.scss";

export const LoginForm: React.FC = () => {
  return (
    <form className={styles.form}>
      <div className={styles.formLogin}>
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
      <div className={styles.formPassword}>
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
    </form>
  );
};
