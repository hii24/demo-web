import { observer } from "mobx-react";
import React from "react";
import { ReactComponent as ChevronIcon } from "../../../../../../assets/vectors/navigation/chevron.svg";
import SessionSettingsHeader from "./components/session-settings-header";
import styles from "./styles.module.scss";
import {SessionSidebarStore} from "../../../../../../store/session-sidebar-store";
import VisualSettings from "./components/visual-settings";
import AuditorySettings from "./components/auditory-settings";
import TactileSettings from "./components/tactile-settings";


const SessionSettings = () => {
  const containerClass = `${styles.container} ${SessionSidebarStore.isActive ? styles.isClose : ""}`
  const iconClass = `${styles.chevronIcon} ${SessionSidebarStore.isActive ? styles.isClose : ""}`

  return (
    <div className={styles.positionParent}>
      <div className={containerClass}>
        <SessionSettingsHeader title="Session settings" />
        <VisualSettings />
        <AuditorySettings />
        <TactileSettings />
      </div>
      <button className={styles.openButton} onClick={() => SessionSidebarStore.toggleActive()}>
        <ChevronIcon className={iconClass} />
      </button>
    </div>
  );
};

export default observer(SessionSettings);
