import React, { FC } from "react";
import { NavBarVertical } from "../NavBarVertical/NavBarVertical";
import { ModalWindowProps } from "./interfaces";
import { CSSTransition } from "react-transition-group";
import styles from "./ModalWindow.module.scss";

export const ModalWindow: FC<ModalWindowProps> = ({ isActive }) => {
  return (
    <div className={styles.modal}>
      <CSSTransition
        in={isActive}
        timeout={1000}
        classNames={styles}
        unmountOnExit
      >
        <div className={styles.left}></div>
      </CSSTransition>

      <CSSTransition
        in={isActive}
        timeout={1000}
        classNames={styles}
        unmountOnExit
      >
        <NavBarVertical />
      </CSSTransition>

      <CSSTransition
        in={isActive}
        timeout={1000}
        classNames={styles}
        unmountOnExit
      >
        {<div className={styles.right}></div>}
      </CSSTransition>
    </div>
  );
};
