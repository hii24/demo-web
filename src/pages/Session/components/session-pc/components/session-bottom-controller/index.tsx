import { observer } from "mobx-react";
import { ReactComponent as ClockIcon } from "../../../../../../assets/vectors/session/controller/clock.svg";
import ControllerButton from "../../../elements/session-controllers/controller-button";
import PauseButton from "../../../elements/session-controllers/pause-button";
import SpeedButton from "../../../elements/session-controllers/speed-button";
import StartButton from "../../../elements/session-controllers/start-button";
import styles from "./styles.module.scss";
import {ActiveSessionStore} from "../../../../../../store/active-session-store";
import moment from "moment";
import SessionDurationSlider from "../../../elements/session-duration-slider";
import {SessionSettingsStore} from "../../../../../../store/session-settings-store";
import {SessionSidebarStore} from "../../../../../../store/session-sidebar-store";


const SessionBottomController = () => {
  const timeValue = SessionSettingsStore.sessionTime !== 65
    ? moment.utc(ActiveSessionStore.sessionFrameInfo.time).format('mm:ss') : '--:--'

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <div className={styles.position}>
          <ControllerButton
            onClick={() => SessionSidebarStore.toggleIsTimerSliderShow()}
            title={timeValue}
            icon={<ClockIcon />}
          />
          {SessionSidebarStore.isTimerSliderShow && !ActiveSessionStore.isStart  && (
            <div className={styles.modal}>
              <span className={styles.modalTitle}>Session duration</span>
              <SessionDurationSlider
                onChange={(v) => SessionSettingsStore.setSessionTime(v)}
                value={SessionSettingsStore.sessionTime}
              />
            </div>
          )}
        </div>

        <SpeedButton />
      </div>

      <div className={styles.subContainer}>
        <span className={styles.passed}>Passes: {ActiveSessionStore.sessionFrameInfo.passesCount}</span>
        <PauseButton
          pause={() => ActiveSessionStore.togglePause()}
          isPause={ActiveSessionStore.isPause}
          isDisabled={false}
        />
        <StartButton
          isAnimating={ActiveSessionStore.isStart}
          startAnimating={() => ActiveSessionStore.startAnimate()}
          stopAnimating={() => ActiveSessionStore.endAnimate()}
        />
      </div>
    </div>
  );
};

export default observer(SessionBottomController);
