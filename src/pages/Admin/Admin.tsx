import React, { FC } from "react";
import { AdminPanel } from "../../components/AdminPanel/AdminPanel";
import styles from "./Admin.module.scss";

export const Admin: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <AdminPanel />
      </div>
    </div>
  );
};
