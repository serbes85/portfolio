import React, { FC } from "react";
import { Link } from "react-router-dom";
import { LinkData, NavBarHorizontalProps } from "./interfaces";
import styles from "./NavBarHorizontal.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const getLinkList = (
  links: LinkData[],
  isBorder: string,
  withHover: string
) => {
  return links.map(({ id, path, name }) => (
    <li key={id} className={isBorder}>
      <Link to={path} className={withHover}>
        <span className={styles.text}>{name}</span>
      </Link>
    </li>
  ));
};

export const NavBarHorizontal: FC<NavBarHorizontalProps> = ({
  links,
  appearance,
  border,
  hover,
  color,
}) => {
  const className = cx({
    list: true,
    withoutBackground: appearance === "withoutBackground",
    colorGray: color === "colorGray",
  });
  const isBorder = cx({
    item: true,
    borderRightWhite: border === "borderRightWhite",
    withoutBorderRight: border === "withoutBorderRight",
  });
  const withHover = cx({
    link: true,
    hoverGreen: hover === "hoverGreen",
    hoverGray: hover === "hoverGray",
    hoverWhite: hover === "hoverWhite",
  });

  return (
    <ul className={className}>{getLinkList(links, isBorder, withHover)}</ul>
  );
};
