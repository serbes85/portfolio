import React from "react";
import { Button } from "../Button/Button";
import sprite from "../../sprite.svg";
// import { LoginFormProps } from "./interfaces";

export const LoginForm: React.FC = () => {
  return (
    <form className="form">
      <h1 className="title">Авторизуйтесь</h1>
      <div className="form__login">
        <label htmlFor="userName">
          <svg className="form__icon" width="20" height="20">
            <use xlinkHref={`${sprite}#login`} />
          </svg>
        </label>
        <input name="userName" id="user-name" type="text" placeholder="Логин" />
      </div>
      <div className="form__password">
        <label htmlFor="userPassword">
          <svg className="form__icon" width="20" height="20">
            <use xlinkHref={`${sprite}#password`} />
          </svg>
          <input
            name="userPassword"
            id="user-password"
            type="password"
            placeholder="Пароль"
          />
        </label>
      </div>
      <div>
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
      <div>
        <Button buttonText="На главную" />
        <Button buttonText="Войти" />
      </div>
    </form>
  );
};
