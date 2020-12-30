import React, { FC } from "react";
import { InputFieldProps } from "./interfaces";
import styles from "./InputField.module.scss";

export const InputField: FC<InputFieldProps> = ({
  htmlFor,
  id,
  name,
  type,
  placeholder,
}) => {
  return (
    <div className={styles.input}>
      <label htmlFor={htmlFor}>
        <input
          className={styles.inputField}
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
        />
      </label>
    </div>
  );
};
