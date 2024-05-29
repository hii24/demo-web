import React, { ReactNode } from "react";
import styles from "./styles.module.scss";

interface Props {
  children: ReactNode;
  onClick: () => void;
}

const FormBackdrop: React.FC<Props> = (props) => {
  return (
    <div className={styles.backdrop} onClick={props.onClick}>
      {props.children}
    </div>
  );
};

export default FormBackdrop;
