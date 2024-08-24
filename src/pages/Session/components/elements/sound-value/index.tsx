import React from "react";
import { ReactComponent as LockIcon } from "../../../../../assets/vectors/session/premiumLock.svg";
import styles from "./styles.module.scss";

interface Props {
  title: string;
  isActive: boolean;
  onClick: (item: any, lock?: boolean) => void;
  isLock?: boolean;
}

const SoundValue: React.FC<Props> = (props) => {
  return (
    <button
      className={`${styles.card} ${props.isActive ? styles.active : ""}`}
      onClick={props.onClick}
    >
      <span className={styles.title}>{props.title}</span>
      {props.isLock && <LockIcon className={styles.lock} />}
    </button>
  );
};

export default SoundValue;
