import React from "react";
import styles from "./styles.module.scss";

interface Props {
  title: string;
  onClick: () => void;
}

const SessionSettingsHeader: React.FC<Props> = (props) => {
  return (
    <div className={styles.header}>
      <span className={styles.title}>{props.title}</span>
    </div>
  );
};

export default SessionSettingsHeader;
