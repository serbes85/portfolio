import React, { FC } from "react";
import { Link, Switch, Route } from "react-router-dom";
import { NavBarHorizontal } from "../NavBarHorizontal/NavBarHorizontal";
import { AdminWorks } from "./AdminWorks/AdminWorks";
import { AdminAbout } from "./AdminAbout/AdminAbout";
import { AdminBlog } from "./AdminBlog/AdminBlog";
import styles from "./AdminPanel.module.scss";
import classNames from "classnames/bind";

import { links } from "./constants";

const cx = classNames.bind(styles);

export const AdminPanel: FC = () => {
  return (
    <section className={cx("section", "admin")}>
      <header className={styles.header}>
        <h1 className={styles.title}>Панель администрирования</h1>
        <div className={styles.headerRight}>
          <Link to="/" className={styles.link}>
            <span className={styles.linkText}>Вернуться на сайт</span>
          </Link>
        </div>
      </header>
      <div className={styles.nav}>
        <NavBarHorizontal
          links={links}
          appearance="withoutBackground"
          border="borderRightWhite"
          color="colorGray"
          hover="hoverWhite"
        />
      </div>
      <div className={styles.content}>
        <Switch>
          <Route path="/blog/adminWorks" component={AdminWorks} />
          <Route path="/blog/adminSkills" component={AdminAbout} />
          <Route path="/blog/adminBlog" component={AdminBlog} />
        </Switch>
      </div>
    </section>
  );
};
