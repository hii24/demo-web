import React from "react";
import styles from "./styles.module.scss";

const BackgroundLightElement: React.FC = () => {
  return <span className={`${styles.element} ${styles.light}`}></span>;
};

export default BackgroundLightElement;
