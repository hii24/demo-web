import React from "react";
import { useNavigate } from "react-router-dom";
import StartBLSButton from "./StartBLSButton/StartBLSButton";
import styles from "./styles.module.scss";

const ClientButtonBlock: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <span className={styles.title}>New session</span>
      <StartBLSButton onClick={() => navigate("/session")} />
    </div>
  );
};

export default ClientButtonBlock;
