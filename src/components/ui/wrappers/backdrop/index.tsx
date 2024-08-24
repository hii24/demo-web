import React, { ReactNode } from "react";
import styles from "./styles.module.scss";

interface Props {
  children: ReactNode;
}

const Backdrop: React.FC<Props> = (props) => {
  return <div className={styles.backdrop}>{props.children}</div>;
};

export default Backdrop;
