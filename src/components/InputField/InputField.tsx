import React, { FC } from "react";
import { InputProps } from "./interfaces";
import styles from "./InputField.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export const InputField: FC<InputProps> = ({
  label,
  register,
  required,
  id,
  type,
  placeholder,
  autocomplete,
  appearance,
}) => {
  const className = cx({
    inputField: true,
    borderRadiusLeft: appearance === "borderRadiusLeft",
  });

  return (
    <div className={styles.input}>
      <label htmlFor={label}>
        <input
          name={label}
          ref={register({ required })}
          className={className}
          id={id}
          type={type}
          placeholder={placeholder}
          autoComplete={autocomplete}
        />
      </label>
    </div>
  );
};
