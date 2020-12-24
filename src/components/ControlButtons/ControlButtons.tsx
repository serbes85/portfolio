import React from "react";
import styles from "./ControlButtons.module.scss";

export const ControlButtons: React.FC = () => {
  return (
    <div className={styles.controlButtons}>
      <div className={styles.control}>
        <input
          type="checkbox"
          className={styles.customCheckbox}
          name="human"
          id="human"
        />
        <label htmlFor="human">Я человек</label>
      </div>
      <span className={styles.text}>Вы точно не робот?</span>
      <div className={styles.control}>
        <input
          type="radio"
          value="yes"
          name="answer"
          id="yes"
          className={styles.customRadio}
        />
        <label htmlFor="yes">Да</label>
        <input
          type="radio"
          value="no"
          name="answer"
          id="no"
          className={styles.customRadio}
        />
        <label htmlFor="no"> Не уверен</label>
      </div>
    </div>
  );
};
