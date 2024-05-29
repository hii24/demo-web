import { observer } from "mobx-react";
import { useState } from "react";
import { ReactComponent as ClockIcon } from "../../../../assets/vectors/session/controller/clock.svg";
import controllerSettingsStore from "../../../../store/controllerSettingsStore";
import visualSettingsStore from "../../../../store/visualSettingsStore";
import ControllerButton from "../ControllerButton/ControllerButton";
import PauseButton from "../PauseButton/PauseButton";
import SpeedButton from "../SpeedButton/SpeedButton";
import StartButton from "../StartButton/StartButton";
import CustomSlider from "./CustomSlider/CustomSlider";
import styles from "./styles.module.scss";

interface Props {
  isAnimating: boolean;
  setIsAnimating: () => void;
}

const SessionBottomController: React.FC<Props> = (props) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [duration, setDuration] = useState({
    minutes: 0,
    seconds: 0,
  });

  const { isPlaying, isPaused, start, stop, pause, count } =
    controllerSettingsStore;

  const { closeMenu, openMenu } = visualSettingsStore;

  const handleDurationChange = (newDuration: any) => {
    // Округлення хвилин до найближчих 5, 10, 15, 30 хвилин
    const step = 5; // Виберіть ваш крок тут: 5, 10, 15, 30
    const minutes = Math.round(newDuration.minutes / step) * step;
    setDuration({ ...newDuration, minutes });
  };

  const onClickClock = () => {
    setIsOpenModal(!isOpenModal);
  };

  const startPlaying = () => {
    start();
    closeMenu();
  };

  const pausePlaying = () => {
    pause();
    openMenu();
  };

  const stopPlaying = () => {
    stop();
    openMenu();
  };

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <div className={styles.position}>
          <ControllerButton
            onClick={onClickClock}
            title="00:00"
            isBottom={true}
          >
            <ClockIcon />
          </ControllerButton>
          {isOpenModal && (
            <div className={styles.modal}>
              <span className={styles.modalTitle}>Session duration</span>
              <CustomSlider />
            </div>
          )}
        </div>

        <SpeedButton />
      </div>

      <div className={styles.subContainer}>
        <span className={styles.passed}>Passes: {count}</span>
        <PauseButton
          pause={pausePlaying}
          isDisabled={(isPaused && isPlaying) || !isPlaying}
        />
        <StartButton
          isAnimating={isPlaying && !isPaused}
          startAnimating={startPlaying}
          stopAnimating={stopPlaying}
        />
      </div>
    </div>
  );
};

export default observer(SessionBottomController);
