import React, { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.scss";

interface Props {
  children: ReactNode;
  onClick: () => void;
  title: string;
  to: string;
}

const HeaderMenuNavLink: React.FC<Props> = (props) => {
  return (
    <NavLink to={props.to} className={styles.link} onClick={props.onClick}>
      {props.children}
      <span>{props.title}</span>
    </NavLink>
  );
};

export default HeaderMenuNavLink;
