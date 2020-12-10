import React from "react";
import Avatar from "./assets/MyAvatar.png";
import styles from "./Person.module.scss";

export const Person: React.FC = () => {
  return (
    <div className={styles.person}>
      <div className={styles.personAvatar}>
        <img src={Avatar} alt="Person avatar" />
      </div>
      <p className={styles.personName}>Бескровный Сергей</p>
      <p className={styles.personDescription}>Личный сайт веб разработчика</p>
    </div>
  );
};
