import { observer } from "mobx-react";
import React, { useEffect, useState } from "react";
import Loader from "../../../../components/ui/loaders/loader";
import styles from './styles.module.scss'
import SessionAnimationScreen from "../elements/session-animation-screen";
import SessionMobileBarTop from "./components/session-mobile-bar-top";
import {SessionMobileBarBottom} from "./components/session-mobile-bar-bottom";
import {SessionMobileSettings} from "./components/session-mobile-settings";


const SessionMobile: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  });


  return (
    <>
      {isLoading && <Loader />}
      <div className={styles.canvasBlock}>
        <SessionMobileSettings />
        <SessionMobileBarTop />
        <SessionAnimationScreen />
        <SessionMobileBarBottom />
      </div>
    </>
  );
};

export default observer(SessionMobile);
