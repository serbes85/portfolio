import React, { forwardRef } from "react";
import { CustomCheckBoxElement, CustomCheckBoxProps } from "./interfaces";
import styles from "./CustomCheckBox.module.scss";

export const CustomCheckBox = forwardRef<
  CustomCheckBoxElement,
  CustomCheckBoxProps
>(({ label, name, id, text, errorMessage }, ref) => {
  return (
    <>
      <input
        type="checkbox"
        name={name}
        id={id}
        className={styles.customCheckbox}
        ref={ref}
      />
      <label htmlFor={label}>{text}</label>
      <div className={styles.error}>{errorMessage}</div>
    </>
  );
});
