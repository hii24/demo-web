import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as LoginIcon } from "../../../../../assets/vectors/session/login.svg";
import styles from "./styles.module.scss";

const LoginBlock: React.FC = () => {
  return (
    <div className={styles.container}>
      <NavLink to="/login">
        <LoginIcon />
      </NavLink>
      <div className={styles.textBlock}>
        <span className={styles.title}>Create an account</span>
        <span className={styles.text}>
          This feature is available for registered users only. Please,{" "}
          <b>Sign Up</b> to be able to connect your devices for a tactile
          stimulation.
        </span>
      </div>
    </div>
  );
};

export default LoginBlock;
