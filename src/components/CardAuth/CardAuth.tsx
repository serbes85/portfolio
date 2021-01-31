import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { CardAuthProps, InputFormValues } from "./interfaces";
import { Title } from "../Title/Title";
import { InputField } from "../InputField/InputField";
import { Icon } from "../Icon/Icon";
import { CustomCheckBox } from "../CustomCheckBox/CustomCheckBox";
import { CustomRadioButton } from "../CustomRadioButton/CustomRadioButton";
import { Button } from "../Button/Button";
import styles from "./CardAuth.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export const CardAuth: FC<CardAuthProps> = ({
  handleClickFlippedFont,
  isFlipped,
}) => {
  const { register, errors, handleSubmit } = useForm<InputFormValues>();
  const className = cx({
    cardAuth: true,
    flipped: isFlipped,
  });

  const onSubmit = (data: InputFormValues) => {
    console.log(data);
  };

  return (
    <div className={className}>
      <div className={styles.auth}>
        <div className={styles.title}>
          <Title size="medium" textTop="Авторизуйтесь" />
        </div>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.input}>
            <div className={styles.login}>
              <div className={styles.icon}>
                <Icon name="login" fill="#949f99" size="1.25rem" />
              </div>
              <InputField
                label="userName"
                register={register}
                required
                id="user-name"
                type="text"
                placeholder="Логин"
              />
            </div>
            <div className={styles.error}>
              {errors.userName && "Введите логин"}
            </div>
          </div>
          <div className={styles.input}>
            <div className={styles.password}>
              <div className={styles.icon}>
                <Icon name="password" fill="#949f99" size="1.25rem" />
              </div>
              <InputField
                label="userPassword"
                register={register}
                required
                id="user-password"
                type="password"
                placeholder="Пароль"
                autocomplete="on"
              />
            </div>
            <div className={styles.error}>
              {errors.userPassword && "Введите пароль"}
            </div>
          </div>
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
          <div className={styles.controlButton}>
            <Button
              type="button"
              buttonText="На главную"
              appearance="borderRadiusLeft"
              onClick={handleClickFlippedFont}
            />
            <Button
              buttonText="Войти"
              appearance="borderRadiusRight"
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
