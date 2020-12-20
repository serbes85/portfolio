import React from "react";
import Avatar from "./assets/MyAvatar.png";
import styles from "./Person.module.scss";

export const Person: React.FC = () => {
  return (
    <div className={styles.person}>
      <div className={styles.avatar}>
        <img src={Avatar} alt="Person avatar" />
      </div>
      <span className={styles.name}>Бескровный Сергей</span>
      <span className={styles.description}>Личный сайт веб разработчика</span>
    </div>
  );
};
