import React, { ReactNode } from "react";
import styles from "./styles.module.scss";

interface Props {
  children: ReactNode;
  onClick: () => void;
  title: string;
}

const HeaderButton: React.FC<Props> = (props) => {
  return (
    <button className={styles.button} onClick={props.onClick}>
      {props.children}
      <span>{props.title}</span>
    </button>
  );
};

export default HeaderButton;
