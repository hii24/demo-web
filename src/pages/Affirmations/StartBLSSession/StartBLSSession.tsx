import React from "react";
import { ReactComponent as PlayIcon } from "../../../assets/vectors/play.svg";
import styles from "./styles.module.scss";

interface Props {
  onClick: () => void;
}

const StartBLSSession: React.FC<Props> = (props) => {
  return (
    <button className={styles.button} onClick={props.onClick}>
      <span>Start BLS session</span>
      <PlayIcon height={24} width={24}/>
    </button>
  );
};

export default StartBLSSession;
