import React, { FC } from "react";
import { NavBar } from "../NavBar/NavBar";
import { NavBarVertical } from "../NavBarVertical/NavBarVertical";
import styles from "./ModalWindow.module.scss";

import { links } from "./constants";

export const ModalWindow: FC = () => {
  return (
    <div className={styles.nav}>
      <NavBarVertical
        links={links}
        render={(links) => <NavBar links={links} />}
      />
    </div>
  );
};
