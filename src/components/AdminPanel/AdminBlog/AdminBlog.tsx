import React, { FC } from "react";
import { InputField } from "../../InputField/InputField";
import { TextArea } from "../../TextArea/TextArea";
import { Button } from "../../Button/Button";
import styles from "./AdminBlog.module.scss";

export const AdminBlog: FC = () => {
  return (
    <>
      <div className={styles.admin}>
        <h2 className={styles.title}>Страница &#171;Блог&#187;</h2>
        <span className={styles.text}>Добавить запись</span>
        <div className={styles.input}>
          <InputField
            label="name"
            placeholder="Название"
            appearance="borderRadius"
            withIcon="withoutIcon"
          />
        </div>
        <div className={styles.input}>
          <InputField
            label="date"
            placeholder="Дата"
            appearance="borderRadius"
            withIcon="withoutIcon"
          />
        </div>
        <div className={styles.input}>
          <TextArea label="article" id="message" placeholder="Содержание" />
        </div>
      </div>
      <div className={styles.button}>
        <Button type="button" buttonText="Добавить" appearance="borderRadius" />
      </div>
    </>
  );
};
