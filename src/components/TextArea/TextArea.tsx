import React, { FC, ChangeEvent, useState } from "react";
import { TextAreaProps } from "./interfaces";
import styles from "./TextArea.module.scss";

export const TextArea: FC<TextAreaProps> = ({ id, name, placeholder }) => {
  const [textAreaValue, setTextAreaValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;

    setTextAreaValue(value);
  };

  return (
    <textarea
      className={styles.textArea}
      id={id}
      name={name}
      placeholder={placeholder}
      value={textAreaValue}
      onChange={handleChange}
    />
  );
};
