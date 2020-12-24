import React from "react";
import { CardPerson } from "../CardPerson/CardPerson";
import { CardAuth } from "../CardAuth/CardAuth";
import { FlipCardProps } from "./interfaces";
import styles from "./FlipCard.module.scss";

export const FlipCard: React.FC<FlipCardProps> = ({
  isFlipped,
  handleClickFlippedFont,
}) => {
  return (
    <div className={styles.card}>
      <CardPerson isFlipped={isFlipped} />
      <CardAuth
        isFlipped={isFlipped}
        handleClickFlippedFont={handleClickFlippedFont}
      />
    </div>
  );
};
