import React from "react";
import MyAvatar from "./assets/MyAvatar.png";
import styles from "./Avatar.module.scss";

export const Avatar: React.FC = () => {
  return (
    <div className={styles.person}>
      <div className={styles.avatar}>
        <img src={MyAvatar} alt="Person avatar" />
      </div>
      <span className={styles.name}>Бескровный Сергей</span>
      <span className={styles.description}>Личный сайт веб разработчика</span>
    </div>
  );
};
