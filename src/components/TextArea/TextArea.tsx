import React, { FC } from "react";
import { TextAreaProps } from "./interfaces";
import styles from "./TextArea.module.scss";

export const TextArea: FC<TextAreaProps> = ({ id, name, placeholder }) => {
  return (
    <textarea
      className={styles.textArea}
      id={id}
      name={name}
      placeholder={placeholder}
    />
  );
};
