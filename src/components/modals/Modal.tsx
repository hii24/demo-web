import React, { ReactNode } from "react";
import styles from "./modal.module.scss";

interface Props {
  children: ReactNode;
}

const Modal: React.FC<Props> = (props) => {
  return <div className={styles.modalContainer}>{props.children}</div>;
};

export default Modal;
