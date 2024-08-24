import React from "react";
import ClientButtonBlock from "../../../components/general/start-session/ClientButtonBlock/ClientButtonBlock";
import GettingStarted from "../../../components/general/getting-started";
import VideoInto from "../../../components/general/start-session/VideoInto/VideoIntro";
import styles from "./styles.module.scss";

const StartSessionClientPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <VideoInto title="Get started by watching this quick intro" />
      <ClientButtonBlock />
      <GettingStarted />
    </div>
  );
};

export default StartSessionClientPage;
