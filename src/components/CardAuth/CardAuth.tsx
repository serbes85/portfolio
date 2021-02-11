import React, { FC } from "react";
import { Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { CardAuthProps, InputFormValues } from "./interfaces";
import { Title } from "../Title/Title";
import { InputField } from "../InputField/InputField";
import { CustomCheckBox } from "../CustomCheckBox/CustomCheckBox";
import { CustomRadioButton } from "../CustomRadioButton/CustomRadioButton";
import { Button } from "../Button/Button";
import { connect } from "react-redux";
import { loginRequest, getError, getIsAuthorized } from "../../modules/auth";
import styles from "./CardAuth.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const CardAuth: FC<CardAuthProps> = ({
  handleClickFlippedFont,
  isFlipped,
  isAuthorized,
  loginRequest,
}) => {
  const { register, errors, handleSubmit } = useForm<InputFormValues>({
    mode: "onBlur",
  });
  const className = cx({
    cardAuth: true,
    flipped: isFlipped,
  });

  const onSubmit = (data: InputFormValues) => {
    const { userName, userPassword } = data;

    loginRequest({ userName, userPassword });
  };

  if (isAuthorized) return <Redirect to="/admin" />;

  return (
    <div className={className}>
      <div className={styles.title}>
        <Title size="medium" textTop="Авторизуйтесь" />
      </div>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.auth}>
          <div className={styles.login}>
            <InputField
              label="userName"
              iconName="login"
              placeholder="Логин"
              ref={register({
                required: "Введите имя",
              })}
              errorMessage={errors.userName?.message}
            />
          </div>
          <div className={styles.password}>
            <InputField
              label="userPassword"
              iconName="password"
              placeholder="Пароль"
              ref={register({
                required: "Введите пароль",
                minLength: {
                  value: 8,
                  message: "Пароль должен быть не менее 8 символов",
                },
              })}
              errorMessage={errors.userPassword?.message}
            />
          </div>
          <div className={styles.control}>
            <div className={styles.controlButton}>
              <div className={styles.checkbox}>
                <CustomCheckBox
                  label="human"
                  name="human"
                  id="human"
                  text="Я человек"
                  ref={register({
                    required: "Роботам тут не место!",
                  })}
                  errorMessage={errors.human?.message}
                />
              </div>
            </div>
            {errors.answer?.type !== "required" &&
            errors.answer?.ref?.value !== "no" ? (
              <span className={styles.text}>Вы точно не робот?</span>
            ) : (
              <span className={cx("text", "error")}>
                {errors.answer?.message}
              </span>
            )}
          </div>
          <div className={styles.controlButton}>
            <CustomRadioButton
              label="yes"
              ref={register({
                required: "Вы точно не робот?",
              })}
              value="yes"
              name="answer"
              id="yes"
              text="Да"
            />
            <CustomRadioButton
              label="no"
              ref={register({
                required: "Вы точно не робот?",
              })}
              value="no"
              name="answer"
              id="no"
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
  );
};

const mapStateToProps = (state: boolean) => ({
  isAuthorized: getIsAuthorized(state),
  error: getError(state),
});
const mapDispatchToProps = { loginRequest };

export default connect(mapStateToProps, mapDispatchToProps)(CardAuth);
