import React, { ReactNode } from "react";
import styles from "./styles.module.scss";

interface Props {
  title: string;
  children: ReactNode;
}

const SettingsBlock: React.FC<Props> = (props) => {
  return (
    <div className={styles.block}>
      <span className={styles.title}>{props.title}</span>
      <div className={styles.settings}>{props.children}</div>
    </div>
  );
};

export default SettingsBlock;
