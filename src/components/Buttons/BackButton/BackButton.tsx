import React, { MouseEventHandler } from "react";
import { ReactComponent as BackIcon } from "../../../assets/vectors/arrow-left.svg";
import styles from "./styles.module.scss";

interface Props {
  buttonText: string;
  onClick: MouseEventHandler;
}

const BackButton: React.FC<Props> = (props) => {
  return (
    <button className={styles.button} onClick={props.onClick}>
      <BackIcon className={styles.icon} />
      {props.buttonText}
    </button>
  );
};

export default BackButton;
