import React from "react";
import styles from "./styles.module.scss";

const BackgroundDarkElement: React.FC = () => {
  return <span className={`${styles.element} ${styles.dark}`}></span>;
};

export default BackgroundDarkElement;
