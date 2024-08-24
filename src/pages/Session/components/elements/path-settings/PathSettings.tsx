import { observer } from "mobx-react";
import React from "react";
import SettingsBlock from "../settings-block";
import {IVisualPath, VISUAL_SETTINGS} from "../../../../../configs/visual-settings";
import SettingWrap from "../setting-wrap";
import {SessionSettingsStore} from "../../../../../store/session-settings-store";



const PathSettings = () => {

  const changePath = (item: IVisualPath) => {
    SessionSettingsStore.setActivePath(item);
  };
  return (
    <SettingsBlock title="Path">
      {
        VISUAL_SETTINGS.paths.map(item => (
          <SettingWrap
            key={item.id}
            width="74px"
            title={item.name}
            isActive={item.id === SessionSettingsStore.activePath.id}
            onClick={() => changePath(item)}
            isLock={item.isPremium}
          >
            <img src={item.icon} alt=""/>
          </SettingWrap>
        ))
      }
    </SettingsBlock>
  );
};

export default observer(PathSettings);
