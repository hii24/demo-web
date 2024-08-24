import React from "react";
import { ReactComponent as Logo } from "../../../../assets/vectors/loaderLogo.svg";
import CircleDotsGradientAnimation from "./Circle/Circle";
import styles from "./styles.module.scss";

const Loader: React.FC = () => {
  return (
    <div className={styles.container}>
      <Logo />
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>EMDR</h1>
        <h2 className={styles.subtitle}>Tappers & Tools</h2>
      </div>
      <div className={styles.loading}>
        <CircleDotsGradientAnimation />
        <span className={styles.loadingText}>Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
