import React from "react";
import { ReactComponent as PlayIcon } from "../../../../../assets/vectors/play.svg";
import styles from "./styles.module.scss";

interface Props {
  onClick: () => void;
}

const StartEMDRButton: React.FC<Props> = (props) => {
  return (
    <button className={styles.button} onClick={props.onClick}>
      <span>Start EMDR session</span>
      <PlayIcon />
    </button>
  );
};

export default StartEMDRButton;
