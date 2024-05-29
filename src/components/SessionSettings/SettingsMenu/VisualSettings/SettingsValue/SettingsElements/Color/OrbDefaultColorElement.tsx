import React from "react";
import styles from "./styles.module.scss";

const OrbDefaultColorElement: React.FC = () => {
  return <span className={`${styles.orb} ${styles.white}`}></span>;
};

export default OrbDefaultColorElement;
