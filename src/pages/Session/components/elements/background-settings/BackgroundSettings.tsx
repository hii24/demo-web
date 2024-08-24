import { observer } from "mobx-react";
import React from "react";
import SettingsBlock from "../settings-block";
import {IVisualBackground, VISUAL_SETTINGS} from "../../../../../configs/visual-settings";
import {SettingBackgroundElement} from "../setting-background-element";
import SettingWrap from "../setting-wrap";
import {SessionSettingsStore} from "../../../../../store/session-settings-store";


const BackgroundSettings = () => {
  const changeBackground = (value: IVisualBackground) => {
    SessionSettingsStore.setActiveBackground(value);
  };
  return (
    <SettingsBlock title="Background">
      {
        VISUAL_SETTINGS.backgrounds.map(item => (
          <SettingWrap
            key={item.id}
            title={item.name}
            isActive={SessionSettingsStore.activeBackground.id === item.id}
            onClick={() => changeBackground(item)}
          >
            <SettingBackgroundElement item={item} />
          </SettingWrap>
        ))
      }
    </SettingsBlock>
  );
};

export default observer(BackgroundSettings);
