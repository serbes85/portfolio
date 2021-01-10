import React from "react";
import { Title } from "../Title/Title";
import { InputField } from "../InputField/InputField";
import { Button } from "../Button/Button";
import styles from "./CardFeedback.module.scss";

export const CardFeedback: React.FC = () => {
  return (
    <div className={styles.cardFeedback}>
      <div className={styles.feedback}>
        <div className={styles.title}>
          <Title size="mediumFontSize" text="Связаться со мной" color="black" />
        </div>
        <form className={styles.form}>
          <div className={styles.name}>
            <InputField
              htmlFor="userName"
              name="userName"
              id="user-name"
              type="text"
              placeholder="Имя"
              appearance="borderRadiusLeft"
            />
          </div>
          <div className={styles.email}>
            <InputField
              htmlFor="userEmail"
              name="userEmail"
              id="user-email"
              type="text"
              placeholder="Email"
              appearance="borderRadiusLeft"
            />
          </div>
        </form>
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
    </div>
  );
};
