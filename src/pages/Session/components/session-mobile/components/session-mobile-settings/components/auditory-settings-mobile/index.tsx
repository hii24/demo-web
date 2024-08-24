import React from "react";
import {observer} from "mobx-react";
import c from './styles.module.scss'
import SoundSettings
  from "../../../../../session-pc/components/session-settings/components/auditory-settings/components/sound-settings";
import ToggleButtonSmall
  from "../../../../../../../../components/ui/buttons/toggle-button-small";
import {SessionMobileSettingsTopBar} from "../session-mobile-settings-top-bar";
import ToggleButton from "../../../../../../../../components/ui/buttons/toggle-button";
import {SessionSettingsStore} from "../../../../../../../../store/session-settings-store";
import {SessionSidebarStore} from "../../../../../../../../store/session-sidebar-store";

const AuditorySettingsMobile = observer(() => {


  return (
    <div className={c.wrap}>
      <SessionMobileSettingsTopBar
        toggleNode={(
          <ToggleButton
            hideIcon={true}
            isActive={SessionSidebarStore.isMobileAuditoryActive}
            toggleActive={() => SessionSidebarStore.changeMobileAuditoryActive(!SessionSidebarStore.isMobileAuditoryActive)}
            title={`Auditory Settings`}
          />
        )}
      />

      <div className={c.container}>
        <SoundSettings />
        <ToggleButtonSmall
          title="Mute for therapist"
          isActive={false}
          setIsActive={() => {}}
          isLock={true}
        />
      </div>
    </div>
  );
})

export default AuditorySettingsMobile;
