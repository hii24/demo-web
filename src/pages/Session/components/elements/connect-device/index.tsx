import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as InfoIcon } from "../../../../../assets/vectors/session/info.svg";
import ConnectButton from "../../../../../components/ui/buttons/connect-button";
import styles from "./styles.module.scss";

const ConnectDevice: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <InfoIcon className={styles.icon} />
        <span className={styles.text}>
          You can use two smartphones, or a smartphone and an Apple Watch for
          the tactile stimulation. Connect your devices by pressing the buttons
          below and following the instructions. If you have questions, check the{" "}
          <NavLink to="/instruction" className={styles.link}>
            Instructions
          </NavLink>{" "}
          below.
        </span>
      </div>
      <ConnectButton title="Left hand" onClick={() => {}} isPending={false} />
      <ConnectButton title="Right hand" onClick={() => {}} isPending={false} />
      <div className={styles.instructionContainer}>
        <NavLink to="/intruction" className={styles.instruction}>
          Instructions
        </NavLink>
      </div>
    </div>
  );
};

export default ConnectDevice;
