import React, { FC, useState } from "react";
import { WelcomePageProps } from "./interfaces";
import { FlipCard } from "../../components/FlipCard/FlipCard";
import { Button } from "../../components/Button/Button";
import { Copyright } from "../../components/Copyright/Copyright";
import { connect } from "react-redux";
import { getError } from "../../modules/auth";
import styles from "./Welcome.module.scss";

const Welcome: FC<WelcomePageProps> = ({ error }) => {
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
        {error && <div className={styles.errorAuth}>Failed to fetch</div>}
        <header className={styles.header}>
          {!isFlipped && (
            <Button
              buttonText="Авторизоваться"
              appearance="authorize"
              onClick={handleClickFlippedBack}
            />
          )}
        </header>
        <div className={styles.dummy} onClick={handleClickFlippedFont} />
        <FlipCard
          isFlipped={isFlipped}
          handleClickFlippedFont={handleClickFlippedFont}
        />
      </div>
      <footer className={styles.footer}>
        <Copyright text="© Бескровный Сергей | Личный сайт веб-разработчика | 2021" />
      </footer>
    </div>
  );
};

const mapStateToProps = (state: boolean) => ({
  error: getError(state),
});

export default connect(mapStateToProps)(Welcome);
