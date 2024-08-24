import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.scss";

interface Props {
  to: string;
  title: string;
}

const FillLinkButton: React.FC<Props> = (props) => {
  return (
    <NavLink to={props.to} className={styles.fillLink}>
      {props.title}
    </NavLink>
  );
};

export default FillLinkButton;
