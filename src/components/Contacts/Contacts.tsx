import React, { FC } from "react";
import { Icon } from "../Icon/Icon";
import { ContactsData, ContactsProps } from "./interfaces";
import styles from "./Contacts.module.scss";

const getContactsList = (contactsList: ContactsData[]) => {
  return contactsList.map(({ id, name, link, text }) => (
    <li key={id} className={styles.item}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={link}
        className={styles.link}
      >
        <Icon
          name={name}
          fill="#6c9c5a"
          size="1.5625rem"
          className={styles.icon}
        />
        <div className={styles.text}>{text}</div>
      </a>
    </li>
  ));
};

export const Contacts: FC<ContactsProps> = ({ contactsList }) => {
  return <ul className={styles.list}>{getContactsList(contactsList)}</ul>;
};
