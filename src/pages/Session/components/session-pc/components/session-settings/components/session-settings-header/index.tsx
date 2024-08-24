import React from "react";
import styles from "./styles.module.scss";

interface Props {
  title: string;
}

const SessionSettingsHeader: React.FC<Props> = (props) => {
  return (
    <div className={styles.header}>
      <span className={styles.title}>{props.title}</span>
    </div>
  );
};

export default SessionSettingsHeader;
