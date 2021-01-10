import React, { FC } from "react";
import { InputFieldProps } from "./interfaces";
import styles from "./InputField.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export const InputField: FC<InputFieldProps> = ({
  htmlFor,
  id,
  name,
  type,
  placeholder,
  appearance,
}) => {
  const className = cx({
    inputField: true,
    borderRadiusLeft: appearance === "borderRadiusLeft",
  });
  return (
    <div className={styles.input}>
      <label htmlFor={htmlFor}>
        <input
          className={className}
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
        />
      </label>
    </div>
  );
};
