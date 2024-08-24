import { observer } from "mobx-react";
import React, { useEffect, useState } from "react";
import Loader from "../../../../components/ui/loaders/loader";
import styles from './styles.module.scss'
import SessionHeader from "./components/session-header";
import SessionSettings from "./components/session-settings";
import SessionTopController
  from "./components/session-top-controller/SessionTopController";
import SessionAnimationScreen from "../elements/session-animation-screen";
import SessionBottomController
  from "./components/session-bottom-controller";


const SessionPc: React.FC = () => {

  return (
    <>
      <div className={styles.container}>
        <SessionHeader />
        <div className={styles.session}>
          <SessionSettings />
          <div className={styles.canvasBlock}>
            <SessionTopController />
            <SessionAnimationScreen />
            <SessionBottomController />
          </div>
        </div>
      </div>
    </>
  );
};

export default observer(SessionPc);
