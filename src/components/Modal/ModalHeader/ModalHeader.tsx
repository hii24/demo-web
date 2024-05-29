import React, { ReactNode } from "react";
import styles from "./styles.module.scss";

interface Props {
  children: ReactNode;
  title: string;
  subTitle?: string;
  isNotIcon?: boolean;
  isLogoBorder?: boolean;
}

const ModalHeader: React.FC<Props> = (props) => {
  return (
    <div className={styles.container}>
      <div className={props.isNotIcon ? "" : styles.iconContainer}>
        {props.children}
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{props.title}</h1>
        {props.subTitle && (
          <h2 className={styles.subTitle}>{props.subTitle}</h2>
        )}
      </div>
    </div>
  );
};

export default ModalHeader;
