import React from "react";
import { useNavigate } from "react-router-dom";
import StartBLSButton from "./StartBLSButton/StartBLSButton";
import styles from "./styles.module.scss";
import {ActiveSessionStore} from "../../../../store/active-session-store";

const ClientButtonBlock: React.FC = () => {
  const navigate = useNavigate();

  const startSessionHandler = async () => {
    const sessionId = await ActiveSessionStore.createSession()

    if (sessionId) {
      navigate("/session?id=" + sessionId )
    }
  }

  return (
    <div className={styles.container}>
      <span className={styles.title}>New session</span>
      <StartBLSButton onClick={startSessionHandler } />
    </div>
  );
};

export default ClientButtonBlock;
