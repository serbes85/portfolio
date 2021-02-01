import React from "react";
import { useForm } from "react-hook-form";
import { InputFormValues } from "./interfaces";
import { Title } from "../Title/Title";
import { InputField } from "../InputField/InputField";
import { TextArea } from "../TextArea/TextArea";
import { Button } from "../Button/Button";
import styles from "./CardFeedback.module.scss";

export const CardFeedback: React.FC = () => {
  const { register, errors, handleSubmit } = useForm<InputFormValues>({
    mode: "onBlur",
  });

  const onSubmit = (data: InputFormValues) => {
    JSON.stringify(data);
  };

  return (
    <div className={styles.cardFeedback}>
      <div className={styles.feedback}>
        <div className={styles.title}>
          <Title size="medium" textTop="Связаться со мной" color="black" />
        </div>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.input}>
            <div className={styles.name}>
              <InputField
                label="userName"
                register={register}
                required
                name="userName"
                id="user-name"
                type="text"
                placeholder="Имя"
                appearance="borderRadiusLeft"
              />
            </div>
            <div className={styles.error}>
              {errors.userName && "Введите имя"}
            </div>
          </div>
          <div className={styles.input}>
            <div className={styles.email}>
              <InputField
                label="userEmail"
                register={register}
                required
                name="userEmail"
                id="user-email"
                type="text"
                placeholder="Email"
                appearance="borderRadiusLeft"
              />
            </div>
            <div className={styles.error}>
              {errors.userEmail && "Введите email"}
            </div>
          </div>
          <div className={styles.input}>
            <div className={styles.text}>
              <TextArea
                label="message"
                register={register}
                required
                id="message"
                placeholder="Ваше сообщение"
              />
            </div>
            <div className={styles.error}>
              {errors.message && "Введите сообщение"}
            </div>
          </div>
          <div className={styles.controls}>
            <Button
              type="submit"
              buttonText="Отправить"
              appearance="borderRadiusLeft"
            />
            <Button
              type="reset"
              buttonText="Очистить"
              appearance="borderRadiusRight"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
