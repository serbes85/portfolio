import React, { FC } from "react";
import { InputField } from "../../InputField/InputField";
import { Button } from "../../Button/Button";
import styles from "./AdminWorks.module.scss";
import classNames from "classnames/bind";

import imgDownload from "./img/download.png";

const cx = classNames.bind(styles);

export const AdminWorks: FC = () => {
  return (
    <>
      <div className={styles.admin}>
        <h2 className={styles.title}>Страница &#171;Мои работы&#187;</h2>
        <span className={styles.text}>Добавить работу</span>
        <div className={styles.input}>
          <InputField
            label="project"
            placeholder="Название проекта"
            appearance="borderRadius"
            withIcon="withoutIcon"
          />
        </div>
        <div className={styles.input}>
          <InputField
            label="tech"
            placeholder="Технологии"
            appearance="borderRadius"
            withIcon="withoutIcon"
          />
        </div>
        <div className={styles.imgWrapper}>
          <img src={imgDownload} className={styles.img} alt="download" />
          <div className={cx("text", "green")}>Загрузить картинку</div>
        </div>
      </div>
      <div className={styles.button}>
        <Button type="button" buttonText="Добавить" appearance="borderRadius" />
      </div>
    </>
  );
};
