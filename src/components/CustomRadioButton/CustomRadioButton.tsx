import React, { forwardRef } from "react";
import { CustomRadioButtonElement, CustomRadioButtonProps } from "./interfaces";
import styles from "./CustomRadioButton.module.scss";

export const CustomRadioButton = forwardRef<
  CustomRadioButtonElement,
  CustomRadioButtonProps
>(({ label, value, name, id, text }, ref) => {
  return (
    <>
      <input
        type="radio"
        value={value}
        name={name}
        id={id}
        className={styles.customRadio}
        ref={ref}
      />
      <label htmlFor={label}>{text}</label>
    </>
  );
});
