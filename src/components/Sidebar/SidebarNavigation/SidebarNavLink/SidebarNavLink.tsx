import React, { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.scss";

interface Props {
  title: string;
  children: ReactNode;
  to: string;
}

const SidebarNavLink: React.FC<Props> = (props) => {
  return (
    <NavLink
      to={props.to}
      className={({ isActive }) =>
        isActive ? `${styles.link} ${styles.isActive}` : styles.link
      }
    >
      {props.children}
      <span>{props.title}</span>
    </NavLink>
  );
};

export default SidebarNavLink;
