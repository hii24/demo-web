import { observer } from "mobx-react";
import React from "react";
import SettingsBlock from "../settings-block";
import {VISUAL_SETTINGS} from "../../../../../configs/visual-settings";
import {SettingOrbitElement} from "../setting-orbit-element";
import SettingWrap from "../setting-wrap";
import {SessionSettingsStore} from "../../../../../store/session-settings-store";

const SizeSettings: React.FC = () => {
  const changeSize = (size: any) => {
    SessionSettingsStore.setActiveSize(size);
  };
  return (
    <SettingsBlock title="Size">
      {
        VISUAL_SETTINGS.sizes.map(item => (
          <SettingWrap
            key={item.id}
            title="Small"
            isActive={SessionSettingsStore.activeSize.id === item.id}
            onClick={() => changeSize(item)}
          >
            <SettingOrbitElement size={item.size} color={SessionSettingsStore.activeColor.hex} />
          </SettingWrap>
        ))
      }
    </SettingsBlock>
  );
}

export default observer(SizeSettings);
