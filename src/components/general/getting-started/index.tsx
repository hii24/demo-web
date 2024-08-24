import React from "react";
import { NavLink } from "react-router-dom";
import Image from "../../../assets/images/lotus.png";
import styles from "./styles.module.scss";

const GettingStarted: React.FC = () => {
  return (
    <div className={styles.container}>
      <span className={styles.text}>Getting started</span>
      <div className={styles.block}>
        <NavLink to="/intruction" className={styles.text}>
          Instruction
        </NavLink>
        <NavLink to="/setup" className={styles.text}>
          How to set up a session?
        </NavLink>

        <NavLink to="/resourses" className={styles.text}>
          How to use Resources?
        </NavLink>

        <img src={Image} alt="logo" className={styles.image} />
      </div>
    </div>
  );
};

export default GettingStarted;
