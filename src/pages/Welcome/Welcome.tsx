import React, { useState } from "react";
import { Intro } from "../../components/Intro/Intro";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { Button } from "../../components/Button/Button";
import styles from "./Welcome.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export const Welcome: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClickFlippedBack = () => {
    setIsFlipped(true);
  };
  const handleClickFlippedFont = () => {
    setIsFlipped(false);
  };
  const className = cx({
    card: true,
    flipped: isFlipped,
  });

  return (
    <div className={styles.container}>
      <div className={styles.dummy} onClick={handleClickFlippedFont} />
      <div className={className}>
        <Intro className={styles.cardFront} />
        <LoginForm
          className={styles.cardBack}
          handleClickFlippedFont={handleClickFlippedFont}
        />
      </div>
      {!isFlipped && (
        <Button
          buttonText="Авторизоваться"
          appearance="authorize"
          onClick={handleClickFlippedBack}
        />
      )}
    </div>
  );
};
