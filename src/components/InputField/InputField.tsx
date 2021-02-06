import React, { forwardRef } from "react";
import { Icon } from "../Icon/Icon";
import { InputElement, InputProps } from "./interfaces";
import styles from "./InputField.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export const InputField = forwardRef<InputElement, InputProps>(
  (
    { label, placeholder, errorMessage, appearance, withIcon, iconName },
    ref
  ) => {
    const className = cx({
      input: true,
      borderRadius: appearance === "borderRadius",
      borderRadiusLeft: appearance === "borderRadiusLeft",
    });
    const icon = cx({
      icon: true,
      withoutIcon: withIcon === "withoutIcon",
    });

    return (
      <>
        <div className={styles.inputField}>
          <div className={icon}>
            <Icon name={iconName} fill="#949f99" size="1rem" />
          </div>
          <div className={styles.field}>
            <label htmlFor={label}>
              <input
                className={className}
                name={label}
                placeholder={placeholder}
                ref={ref}
              />
            </label>
          </div>
        </div>
        <div className={styles.error}>{errorMessage}</div>
      </>
    );
  }
);
