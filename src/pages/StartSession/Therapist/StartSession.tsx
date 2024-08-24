import React from "react";
import GettingStarted from "../../../components/general/getting-started";
import Greetings from "../../../components/general/start-session/Greetings/Greetings";
import TherapistButtonBlock from "../../../components/general/start-session/TherapistButtonBlock/TherapistButtonBlock";
import styles from "./styles.module.scss";

const StartSessionTherapistPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Greetings />
      <TherapistButtonBlock />
      <GettingStarted />
    </div>
  );
};

export default StartSessionTherapistPage;
