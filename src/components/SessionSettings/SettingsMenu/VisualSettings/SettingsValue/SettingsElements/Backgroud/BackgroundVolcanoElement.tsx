import React from "react";
import styles from "./styles.module.scss";

const BackgroundVolcanoElement: React.FC = () => {
  return <span className={`${styles.element} ${styles.volcano}`}></span>;
};

export default BackgroundVolcanoElement;
