import React, { forwardRef } from "react";
import { TextAreaElement, TextAreaProps } from "./interfaces";
import styles from "./TextArea.module.scss";

export const TextArea = forwardRef<TextAreaElement, TextAreaProps>(
  ({ label, errorMessage, id, placeholder }, ref) => {
    return (
      <div className={styles.input}>
        <label htmlFor={label}>
          <textarea
            className={styles.textArea}
            ref={ref}
            id={id}
            name={label}
            placeholder={placeholder}
          />
        </label>
        <div className={styles.error}>{errorMessage}</div>
      </div>
    );
  }
);
