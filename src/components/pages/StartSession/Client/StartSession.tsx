import React from "react";
import ClientButtonBlock from "../../../StartSession/ClientButtonBlock/ClientButtonBlock";
import GettingStarted from "../../../StartSession/GettingStarted/GettingStarted";
import VideoInto from "../../../StartSession/VideoInto/VideoIntro";
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
