import React, { FC, useContext } from "react";
import { Switch, Route } from "react-router-dom";
import { NavBarHorizontal } from "../NavBarHorizontal/NavBarHorizontal";
import { AdminWorks } from "./AdminWorks/AdminWorks";
import { AdminAbout } from "./AdminAbout/AdminAbout";
import { AdminBlog } from "./AdminBlog/AdminBlog";
import styles from "./AdminPanel.module.scss";
import classNames from "classnames/bind";
import { observer } from "mobx-react";
import AuthStore from "../../stories/AuthStore";

import { links } from "./constants";

const cx = classNames.bind(styles);

const AdminPanel: FC = () => {
  const authStore = useContext(AuthStore);

  const handleLogout = () => {
    authStore.logout();
  };

  return (
    <section className={cx("section", "admin")}>
      <header className={styles.header}>
        <h1 className={styles.title}>Панель администрирования</h1>
        <div className={styles.headerRight}>
          <button className={styles.button} onClick={handleLogout}>
            <span className={styles.buttonText}>Вернуться на сайт</span>
          </button>
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
          <Route path="/admin/works" component={AdminWorks} />
          <Route path="/admin/skills" component={AdminAbout} />
          <Route path="/admin/blog" component={AdminBlog} />
        </Switch>
      </div>
    </section>
  );
};

export default observer(AdminPanel);
