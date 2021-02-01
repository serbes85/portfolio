import React, { FC } from "react";
import { CustomCheckBoxProps } from "./interfaces";
import styles from "./CustomCheckBox.module.scss";

export const CustomCheckBox: FC<CustomCheckBoxProps> = ({
  label,
  register,
  required,
  name,
  id,
  text,
}) => {
  return (
    <>
      <input
        type="checkbox"
        name={name}
        id={id}
        className={styles.customCheckbox}
        ref={register({ required })}
      />
      <label htmlFor={label}>{text}</label>
    </>
  );
};
