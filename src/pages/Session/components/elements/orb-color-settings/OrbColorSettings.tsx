import { observer } from "mobx-react";
import React from "react";
import SettingsBlock from "../settings-block";
import {IVisualDotBackgroundColor, VISUAL_SETTINGS} from "../../../../../configs/visual-settings";
import { SettingOrbitElement } from "../setting-orbit-element";
import SettingWrap from "../setting-wrap";
import {SessionSettingsStore} from "../../../../../store/session-settings-store";

const OrbColorSettings = () => {
  const changeColorHandler = (color: IVisualDotBackgroundColor, isLock?: boolean) => {
    if (isLock) return
    SessionSettingsStore.setActiveColor(color);
  };

  return (
    <SettingsBlock title="Color">
      {
        VISUAL_SETTINGS.dotBackgroundColors.map(item => (
          <SettingWrap
            key={item.id}
            title={item.name}
            isActive={item.id === SessionSettingsStore.activeColor.id}
            onClick={() => changeColorHandler(item, item.isPremium)}
            isLock={item.isPremium}
          >
            <SettingOrbitElement color={item.hex} />
          </SettingWrap>
        ))
      }

    </SettingsBlock>
  );
};

export default observer(OrbColorSettings);
