import React, { MouseEvent, useState } from "react";
import { Intro } from "../components/Intro/Intro";
import { LoginForm } from "../components/LoginForm/LoginForm";
import { Button } from "../components/Button/Button";
import styles from "./WelcomePage.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export const WelcomePage: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClickFlipped = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setIsFlipped(!isFlipped);
  };

  const className = cx({
    card: true,
    flipped: isFlipped,
  });

  return (
    <div className="intro">
      <div className={className}>
        <Intro className={styles.cardFront} />
        <LoginForm
          className={styles.cardBack}
          handleClickFlipped={handleClickFlipped}
        />
      </div>
      {!isFlipped && (
        <Button
          buttonText="Авторизоваться"
          appearance="authorize"
          onClick={handleClickFlipped}
        />
      )}
    </div>
  );
};
