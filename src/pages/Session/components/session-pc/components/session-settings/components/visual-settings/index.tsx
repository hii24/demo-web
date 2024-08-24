import { observer } from "mobx-react";
import React from "react";
import BackgroundSettings from "../../../../../elements/background-settings/BackgroundSettings";
import OrbColorSettings from "../../../../../elements/orb-color-settings/OrbColorSettings";
import PathSettings from "../../../../../elements/path-settings/PathSettings";
import PositionSettings from "../../../../../elements/position-settings/PositionSettings";
import SizeSettings from "../../../../../elements/size=settings/SizeSettings";
import {SessionSidebarStore} from "../../../../../../../../store/session-sidebar-store";
import {SettingsGroup} from "../../../../../elements/settings-group";
import styles from "./styles.module.scss";

const VisualSettings = () => {

  return (
    <SettingsGroup
      title="Visual"
      isActive={SessionSidebarStore.isVisualSettingActive}
      toggleActive={() => SessionSidebarStore.toggleVisualSettingsActive()}
    >
      <div className={styles.settingsBlock}>
        <SizeSettings />
        <OrbColorSettings />
        <BackgroundSettings />
        <PathSettings />
        <PositionSettings />
      </div>
    </SettingsGroup>
  );
};

export default observer(VisualSettings);
