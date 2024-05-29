import React, { ReactNode } from "react";
import styles from "./styles.module.scss";

interface Props {
  children: ReactNode;
  title: string;
  onClick: () => void;
}

const ClientButton: React.FC<Props> = (props) => {
  return (
    <button className={styles.button} onClick={props.onClick}>
      {props.children}
      <span>{props.title}</span>
    </button>
  );
};

export default ClientButton;
