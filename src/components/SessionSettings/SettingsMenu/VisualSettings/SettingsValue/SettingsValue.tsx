import React, { ReactNode } from "react";
import { ReactComponent as LockIcon } from "../../../../../assets/vectors/session/premiumLock.svg";
import {
  BackgroundEnum,
  OrbColorEnum,
  PositionEnum,
  SizeEnum,
} from "../../../../../types/settings.type";
import styles from "./styles.module.scss";

interface Props {
  title: string;
  children: ReactNode;
  value: SizeEnum | OrbColorEnum | BackgroundEnum | PositionEnum;
  isActive: boolean;
  onClick: (item: any, lock?: boolean) => void;
  isPremuim: boolean;
  isLock?: boolean;
}

const SettingValue: React.FC<Props> = (props) => {
  return (
    <button
      className={`${styles.card} ${props.isActive ? styles.active : ""}`}
      onClick={() => props.onClick(props.value, props.isLock)}
    >
      {props.children}
      <span className={styles.title}>{props.title}</span>
      {props.isLock && <LockIcon className={styles.lock} />}
    </button>
  );
};

export default SettingValue;
