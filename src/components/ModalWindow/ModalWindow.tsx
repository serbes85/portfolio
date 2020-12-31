import React, { FC } from "react";
import { NavBarVertical } from "../NavBarVertical/NavBarVertical";
import { ModalWindowProps } from "./interfaces";
import classNames from "classnames/bind";
import styles from "./ModalWindow.module.scss";

const cx = classNames.bind(styles);

export const ModalWindow: FC<ModalWindowProps> = ({ isActive }) => {
  const left = cx({
    left: true,
    active: isActive,
  });
  const right = cx({
    right: true,
    active: isActive,
  });

  return (
    <div className={styles.modal}>
      <div className={left}></div>
      <NavBarVertical />
      <div className={right}></div>
    </div>
  );
};
