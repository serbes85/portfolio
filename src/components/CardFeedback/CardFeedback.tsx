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
      <div className={styles.title}>
        <Title size="medium" textTop="Связаться со мной" color="black" />
      </div>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.feedback}>
          <div className={styles.name}>
            <InputField
              label="userName"
              placeholder="Имя"
              ref={register({
                required: "Введите имя",
              })}
              errorMessage={errors.userName?.message}
              appearance="borderRadiusLeft"
              withIcon="withoutIcon"
            />
          </div>
          <div className={styles.email}>
            <InputField
              label="userEmail"
              placeholder="Email"
              ref={register({
                required: "Введите email",
              })}
              errorMessage={errors.userEmail?.message}
              appearance="borderRadiusLeft"
              withIcon="withoutIcon"
            />
          </div>
          <div className={styles.text}>
            <TextArea
              label="message"
              id="message"
              placeholder="Ваше сообщение"
              ref={register({
                required: "Введите сообщение",
              })}
              errorMessage={errors.message?.message}
            />
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
  );
};
