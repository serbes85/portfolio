import React, { FC } from "react";
import { BurgerMenuProps } from "./interfaces";
import styles from "./BurgerMenu.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export const BurgerMenu: FC<BurgerMenuProps> = ({
  isActive,
  hahdleClickSetActiveClass,
}) => {
  const className = cx({ burgerMenu: true, active: isActive });

  return (
    <div className={className} onClick={hahdleClickSetActiveClass}>
      <span className={styles.burgerMenuLine}></span>
    </div>
  );
};
