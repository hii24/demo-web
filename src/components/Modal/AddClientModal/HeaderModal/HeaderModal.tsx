import React from "react";
import { ReactComponent as CrossIcon } from "../../../../assets/vectors/x-close.svg";
import styles from "./styles.module.scss";

interface Props {
  onClose: () => void;
  title: string;
  description: string;
}

const HeaderModal: React.FC<Props> = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <span className={styles.title}>{props.title}</span>
        <button onClick={props.onClose} className={styles.button}>
          <CrossIcon />
        </button>
      </div>
      <span className={styles.description}>{props.description}</span>
    </div>
  );
};

export default HeaderModal;
