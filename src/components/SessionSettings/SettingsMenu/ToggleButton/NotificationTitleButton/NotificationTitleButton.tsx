import React, { ReactNode } from "react";
import { ReactComponent as TooltipIcon } from "../../../../../assets/vectors/session/tooltip.svg";
import styles from "./styles.module.scss";

interface Props {
  title: string;
  children: ReactNode;
}

const NotificationTitleButton: React.FC<Props> = (props) => {
  return (
    <div className={styles.container}>
      <button className={styles.button}>{props.children}</button>
      <div className={styles.notification}>
        <span className={styles.text}>{props.title}</span>

        <TooltipIcon className={styles.tooltip} />
      </div>
    </div>
  );
};

export default NotificationTitleButton;
