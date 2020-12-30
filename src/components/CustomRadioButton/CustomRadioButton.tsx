import React, { FC } from "react";
import { CustomRadioButtonProps } from "./interfaces";
import styles from "./CustomRadioButton.module.scss";

export const CustomRadioButton: FC<CustomRadioButtonProps> = ({
  value,
  name,
  id,
  htmlFor,
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
      />
      <label htmlFor={htmlFor}>{text}</label>
    </>
  );
};
