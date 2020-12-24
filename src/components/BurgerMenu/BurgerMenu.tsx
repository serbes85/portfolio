import React, { useState } from "react";
import styles from "./BurgerMenu.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export const BurgerMenu: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  const hahdleClickIsActive = () => {
    setIsActive(!isActive);
  };
  const className = cx({ burgerMenu: true, active: isActive });

  return (
    <div className={className} onClick={hahdleClickIsActive}>
      <span className={styles.burgerMenuLine}></span>
    </div>
  );
};
