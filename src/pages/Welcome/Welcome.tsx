import React, { useState } from "react";
import { FlipCard } from "../../components/FlipCard/FlipCard";
import { Button } from "../../components/Button/Button";
import { Copyright } from "../../components/Copyright/Copyright";
import styles from "./Welcome.module.scss";

export const Welcome: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClickFlippedBack = () => {
    setIsFlipped(true);
  };
  const handleClickFlippedFont = () => {
    setIsFlipped(false);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.dummy} onClick={handleClickFlippedFont} />
        <div className={styles.buttonAuth}>
          {!isFlipped && (
            <Button
              buttonText="Авторизоваться"
              appearance="authorize"
              onClick={handleClickFlippedBack}
            />
          )}
        </div>
        <FlipCard
          isFlipped={isFlipped}
          handleClickFlippedFont={handleClickFlippedFont}
        />
        <Copyright text="© Бескровный Сергей | Личный сайт веб-разработчика | 2021" />
      </div>
    </div>
  );
};
