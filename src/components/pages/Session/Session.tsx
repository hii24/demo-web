import { observer } from "mobx-react";
import React, { useEffect, useState } from "react";
import visualSettingsStore from "../../../store/visualSettingsStore";
import { getBackground } from "../../../utils/visualSettings";
import DotsDiv from "../../BouncingDot/DotsDiv";
import SessionHeader from "../../Header/SessionHeader/SessionHeader";
import Loader from "../../Loader/Loader";
import SessionBottomController from "../../SessionSettings/SessionControllers/ControllerBottomButtons/SessionBottomController";
import SessionTopController from "../../SessionSettings/SessionControllers/ControllersTopButton/SessionTopController";
import SessionSettings from "../../SessionSettings/SessionSettings";
import styles from "./styles.module.scss";

const SessionPage: React.FC = () => {
  const [radius, setRadius] = useState<number>(20);
  const [backgroundColor, setBackgroundColor] = useState<string>("#D0D5DD");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [speed, setSpeed] = useState<number>(10);
  const [startPosition, setStartPosition] = useState<number>(408);
  const [backgroundImage, setBackgroundImage] = useState<string>("");
  const [passes, setPasses] = useState<number>(0);
  const [isOpenSideBar, setIsOpenSideBar] = useState<boolean>(true);
  const [isStartAnimation, setIsStartAnimation] = useState<boolean>(false);
  const { activeBackground } = visualSettingsStore;

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  });

  const addPasses = () => {
    setPasses((prevState) => (prevState += 1));
  };

  const closeOpenSettings = () => {
    setIsOpenSideBar(!isOpenSideBar);
  };

  const startStopAnimation = () => {
    setIsStartAnimation(!isStartAnimation);
  };

  return (
    <>
      {isLoading && <Loader />}
      <div className={styles.container}>
        <SessionHeader />
        <div className={styles.session}>
          <SessionSettings
            isOpen={isOpenSideBar}
            closeOpen={closeOpenSettings}
          />

          <div
            className={styles.canvasBlock}
            style={{
              background: getBackground(activeBackground),
            }}
          >
            <SessionTopController />
            <DotsDiv
              radius={radius}
              backgroundColor={backgroundColor}
              speed={speed}
              startPosition={startPosition}
              backgroundImage={backgroundImage}
              addPasses={addPasses}
              isOpenSidebar={isOpenSideBar}
              isAnimating={isStartAnimation}
              setIsAnimating={startStopAnimation}
            />
            <SessionBottomController
              isAnimating={isStartAnimation}
              setIsAnimating={startStopAnimation}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default observer(SessionPage);
