import React, { ReactNode } from "react";
import { ReactComponent as LockIcon } from "../../../../../assets/vectors/session/premiumLock.svg";
import styles from "./styles.module.scss";

interface ISettingWrap {
  children: ReactNode;
  title: string;
  isActive: boolean;
  onClick: () => void;
  isLock?: boolean;
  width?: string
}

const SettingWrap: React.FC<ISettingWrap> = (props) => {
  return (
    <button
      className={`${styles.card} ${props.isActive ? styles.active : ""}`}
      onClick={props.onClick}
      style={{width: props.width ? props.width : "60px"}}
    >
      {props.children}
      <span className={styles.title}>{props.title}</span>
      {props.isLock && <LockIcon className={styles.lock} />}
    </button>
  );
};

export default SettingWrap;
