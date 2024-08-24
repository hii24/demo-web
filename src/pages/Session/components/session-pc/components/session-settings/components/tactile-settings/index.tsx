import React from "react";
import ConnectDevice from "../../../../../elements/connect-device";
import LoginBlock from "./components/login-block/LoginBlock";
import styles from "./styles.module.scss";
import {SessionSidebarStore} from "../../../../../../../../store/session-sidebar-store";
import {SettingsGroup} from "../../../../../elements/settings-group";
import {observer} from "mobx-react";

const TactileSettings = observer(() => {

  return (
    <SettingsGroup
      title="Tactile"
      isActive={SessionSidebarStore.isTactileSettingActive}
      toggleActive={() => SessionSidebarStore.toggleTactileSettingsActive()}
    >
      <div className={styles.settingsBlock}>
        <LoginBlock />
        <ConnectDevice />
      </div>
    </SettingsGroup>
  );
})

export default TactileSettings;
