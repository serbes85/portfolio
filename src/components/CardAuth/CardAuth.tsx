import React from "react";
import { CardAuthProps } from "./interfaces";
import { Title } from "../Title/Title";
import { LoginForm } from "../LoginForm/LoginForm";
import { CustomCheckBox } from "../CustomCheckBox/CustomCheckBox";
import { CustomRadioButton } from "../CustomRadioButton/CustomRadioButton";
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
        <div className={styles.control}>
          <div className={styles.controlButton}>
            <CustomCheckBox
              name="human"
              id="human"
              htmlFor="human"
              text="Я человек"
            />
          </div>
          <span className={styles.controlText}>Вы точно не робот?</span>
          <div className={styles.controlButton}>
            <CustomRadioButton
              value="yes"
              name="answer"
              id="yes"
              htmlFor="yes"
              text="Да"
            />
            <CustomRadioButton
              value="no"
              name="answer"
              id="no"
              htmlFor="no"
              text="Нет"
            />
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
    </div>
  );
};
