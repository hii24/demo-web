import styles from "./styles.module.scss";
import ControllerButton
  from "../../../elements/session-controllers/controller-button";
import {ActiveSessionStore} from "../../../../../../store/active-session-store";
import moment from "moment/moment";
import SpeedButton from "../../../elements/session-controllers/speed-button";
import {observer} from "mobx-react";
import {StateToggle} from "../../../../../../components/ui/elements/state-toggle";
import { ReactComponent as ClockIcon } from "../../../../../../assets/vectors/session/controller/clock.svg";
import { ReactComponent as InfiniteIcon } from "../../../../../../assets/images/icons/icon-infinity.svg";
import { ReactComponent as DownIcon } from "../../../../../../assets/images/icons/chevron-down.svg";
import PauseButton from "../../../elements/session-controllers/pause-button";
import StartButton from "../../../elements/session-controllers/start-button";
import SessionDurationSlider
  from "../../../elements/session-duration-slider";
import {SessionSettingsStore} from "../../../../../../store/session-settings-store";
import {SessionSidebarStore} from "../../../../../../store/session-sidebar-store";


const SessionMobileBarBottom = observer(() => {
  const timeValue = SessionSettingsStore.sessionTime === 65
    ? "Infinite" : moment.utc(ActiveSessionStore.sessionFrameInfo.time).format('mm:ss')


  return (
    <div
      className={styles.container}
      style={{
        transform: `translateY(${SessionSidebarStore.isMobileBarOpen ? 0 : 60}px)`
      }}
    >
      <div className={styles.topBlock}>
        <div className={styles.passes}>Passes: {ActiveSessionStore.sessionFrameInfo.passesCount}</div>
        {
          timeValue !== 'Infinite' && (
            <div className={styles.timer}>Timer: {timeValue}</div>
          )
        }
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

      <div className={styles.bottomBlock}>
        <div
          className={styles.settingsBtn}
          onClick={() => SessionSidebarStore.toggleMobileBar()}
        >
          Settings
          <span
            style={{rotate: !SessionSidebarStore.isMobileBarOpen ? '180deg' : '0deg'}}
          >
            <DownIcon />
          </span>
        </div>

        <div className={styles.bottomLeft}>
          <ControllerButton
            title="Visual"
            onClick={() => SessionSidebarStore.changeActiveMobileSettings("visual")}
            icon={(
              <StateToggle
                value={SessionSidebarStore.isMobileVisualActive}
                onChange={(v) => SessionSidebarStore.changeMobileVisualActive(v)}
              />
            )}
          />
          <ControllerButton
            title="Auditory"
            onClick={() => SessionSidebarStore.changeActiveMobileSettings("auditory")}
            icon={(
              <StateToggle
                value={SessionSidebarStore.isMobileAuditoryActive}
                onChange={(v) => SessionSidebarStore.changeMobileAuditoryActive(v)}
              />
            )}
          />
          <ControllerButton
            title="Tacltile"
            onClick={() => SessionSidebarStore.changeActiveMobileSettings("tactile")}
            icon={(
              <StateToggle
                value={SessionSidebarStore.isMobileTactileActive}
                onChange={(v) => SessionSidebarStore.changeMobileTactileActive(v)}
              />
            )}
          />
        </div>

        <div className={styles.bottomRight}>
          <ControllerButton
            onClick={() => SessionSidebarStore.toggleIsTimerSliderShow()}
            title={SessionSettingsStore.sessionTime === 65 ? "Infinite" : timeValue}
            icon={SessionSettingsStore.sessionTime === 65 ? <InfiniteIcon /> : <ClockIcon /> }
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

          <SpeedButton />
        </div>
      </div>
    </div>
  );
})

export {
  SessionMobileBarBottom
}
