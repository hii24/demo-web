import React from "react";
import ToggleButtonSmall from "../../../../../../../../components/ui/buttons/toggle-button-small";
import SoundSettings from "./components/sound-settings";
import styles from "./styles.module.scss";
import {SettingsGroup} from "../../../../../elements/settings-group";
import {SessionSidebarStore} from "../../../../../../../../store/session-sidebar-store";
import {observer} from "mobx-react";

const AuditorySettings = observer(() => {

  /*


   */

  return (
    <SettingsGroup
      title="Auditory"
      isActive={SessionSidebarStore.isAudioSettingActive}
      toggleActive={() => SessionSidebarStore.toggleAudioSettingsActive()}
    >
      <div className={styles.settingsBlock}>
        <SoundSettings />
        <ToggleButtonSmall
          title="Mute for therapist"
          isActive={false}
          setIsActive={() => {}}
          isLock={true}
        />
      </div>
    </SettingsGroup>
  );
})

export default AuditorySettings;
