import React, { FC } from "react";
import { AdminPanel } from "../../components/AdminPanel/AdminPanel";
import styles from "./Admin.module.scss";
import { connect } from "react-redux";

export const Admin: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <AdminPanel />
      </div>
    </div>
  );
};

export default connect()(Admin);
