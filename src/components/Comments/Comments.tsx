import React, { FC } from "react";
import { Avatar } from "../Avatar/Avatar";
import { CommentsData, CommentsProps } from "./interfaces";
import styles from "./Comments.module.scss";

const getCommentsList = (comments: CommentsData[]) => {
  return comments.map(({ id, avatarUrl, name, text }) => (
    <li key={id} className={styles.item}>
      <Avatar avatarUrl={avatarUrl} name={name} />
      <div className={styles.comment}>
        <p className={styles.text}>{text}</p>
        <p className={styles.title}>{name}</p>
      </div>
    </li>
  ));
};

export const Comments: FC<CommentsProps> = ({ comments }) => {
  return <ul className={styles.list}>{getCommentsList(comments)}</ul>;
};
