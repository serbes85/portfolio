import React from "react";
import { useHistory } from "react-router-dom";
import { IntroProps } from "./interfaces";
import { Socials } from "../Socials/Socials";
import { Person } from "../Person/Person";
import { Button } from "../Button/Button";
import styles from "./Intro.module.scss";

export const Intro: React.FC<IntroProps> = ({ className }) => {
  const history = useHistory();
  return (
    <div className={className}>
      <div className={styles.hero}>
        <Person />
        <Socials />
      </div>
      <nav className={styles.nav}>
        <Button
          buttonText="Мои работы"
          appearance="borderRadiusLeft"
          onClick={() => history.push("/works")}
        />
        <Button
          buttonText="Обо мне"
          appearance="borderRight"
          onClick={() => history.push("/about")}
        />
        <Button
          buttonText="Блог"
          appearance="borderRadiusRight"
          onClick={() => history.push("/blog")}
        />
      </nav>
    </div>
  );
};
