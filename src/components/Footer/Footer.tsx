import React, { FC } from "react";
import { NavBarHorizontal } from "../NavBarHorizontal/NavBarHorizontal";
import { Socials } from "../Socials/Socials";
import { Copyright } from "../Copyright/Copyright";
import styles from "./Footer.module.scss";
import classNames from "classnames/bind";

import { links } from "./constants";

const cx = classNames.bind(styles);

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.row}>
        <div className={styles.left}>
          <NavBarHorizontal
            links={links}
            appearance="withoutBackground"
            border="withoutBorderRight"
            hover="hoverGray"
          />
          <Socials hover="hoverWhite" />
        </div>
        <div className={styles.right}>
          Всегда пишите код так, будто сопровождать его будет склонный к насилию
          психопат, который знает, где вы живете.
          <span>&mdash; Martin Golding</span>
        </div>
      </div>
      <div className={cx("row", "backgroundGreen")}>
        <Copyright text="© Бескровный Сергей | Личный сайт веб-разработчика | 2021" />
      </div>
    </footer>
  );
};
