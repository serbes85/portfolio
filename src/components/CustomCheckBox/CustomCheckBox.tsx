import React, { FC } from "react";
import { CustomCheckBoxProps } from "./interfaces";
import styles from "./CustomCheckBox.module.scss";

export const CustomCheckBox: FC<CustomCheckBoxProps> = ({
  name,
  id,
  htmlFor,
  text,
}) => {
  return (
    <>
      <input
        type="checkbox"
        name={name}
        id={id}
        className={styles.customCheckbox}
      />
      <label htmlFor={htmlFor}>{text}</label>
    </>
  );
};
