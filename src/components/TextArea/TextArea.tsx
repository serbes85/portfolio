import React, { FC } from "react";
import { TextAreaProps } from "./interfaces";
import styles from "./TextArea.module.scss";

export const TextArea: FC<TextAreaProps> = ({
  label,
  register,
  required,
  id,
  placeholder,
}) => {
  return (
    <div className={styles.input}>
      <label htmlFor={label}>
        <textarea
          className={styles.textArea}
          ref={register({ required })}
          id={id}
          name={label}
          placeholder={placeholder}
        />
      </label>
    </div>
  );
};
