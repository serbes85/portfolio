import React from "react";
import sprite from "./assets/icons/sprite.svg";
import { IconProps } from "./interfaces";

export const Icon: React.FC<IconProps> = ({ name, fill, size, className }) => {
  return (
    <svg className={`${className}`} fill={fill} width={size} height={size}>
      <use xlinkHref={`${sprite}#icon-${name}`} />
    </svg>
  );
};
