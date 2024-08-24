import React from "react";
import CircleDotsGradientAnimation from "./Circle/Circle";
import styles from "./styles.module.scss";

const DefaultLoader: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loading}>
        <CircleDotsGradientAnimation />
        <span className={styles.loadingText}>Loading...</span>
      </div>
    </div>
  );
};

export default DefaultLoader;
