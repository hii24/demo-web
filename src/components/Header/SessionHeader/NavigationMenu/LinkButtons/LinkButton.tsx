import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.scss";

interface Props {
  to: string;
  title: string;
}

const LinkButton: React.FC<Props> = (props) => {
  return (
    <NavLink to={props.to} className={styles.link}>
      {props.title}
    </NavLink>
  );
};

export default LinkButton;
