import React, { ReactNode } from "react";
import styles from "./styles.module.scss";

interface Props {
  children: ReactNode;
}

const BigModal: React.FC<Props> = (props) => {
  return <div className={styles.modalContainer}>{props.children}</div>;
};

export default BigModal;
