import React from "react";
import GettingStarted from "../../../StartSession/GettingStarted/GettingStarted";
import Greetings from "../../../StartSession/Greetings/Greetings";
import TherapistButtonBlock from "../../../StartSession/TherapistButtonBlock/TherapistButtonBlock";
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
