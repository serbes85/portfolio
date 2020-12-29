import React, { FC } from "react";
import { BurgerMenuProps } from "./interfaces";
import styles from "./BurgerMenu.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export const BurgerMenu: FC<BurgerMenuProps> = ({
  isActive,
  hahdleClickSetActiveClass,
}) => {
  const className = cx({ button: true, active: isActive });

  return (
    <button className={className} onClick={hahdleClickSetActiveClass}>
      <div className={styles.line}></div>
    </button>
  );
};
