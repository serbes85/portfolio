import React, { FC, ChangeEvent, useState } from "react";
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
  autocomplete,
  appearance,
}) => {
  const className = cx({
    inputField: true,
    borderRadiusLeft: appearance === "borderRadiusLeft",
  });
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setInputValue(value);
  };

  return (
    <div className={styles.input}>
      <label htmlFor={htmlFor}>
        <input
          className={className}
          id={id}
          name={name}
          type={type}
          value={inputValue}
          placeholder={placeholder}
          autoComplete={autocomplete}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};
