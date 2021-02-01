import React, { FC } from "react";
import { CustomRadioButtonProps } from "./interfaces";
import styles from "./CustomRadioButton.module.scss";

export const CustomRadioButton: FC<CustomRadioButtonProps> = ({
  label,
  register,
  required,
  value,
  name,
  id,
  text,
}) => {
  return (
    <>
      <input
        type="radio"
        value={value}
        name={name}
        id={id}
        className={styles.customRadio}
        ref={register({ required })}
      />
      <label htmlFor={label}>{text}</label>
    </>
  );
};
