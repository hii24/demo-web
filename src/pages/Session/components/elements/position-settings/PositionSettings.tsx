import { observer } from "mobx-react";
import React from "react";
import SettingWrap from "../setting-wrap";
import SettingsBlock from "../settings-block";
import {IVisualPosition, VISUAL_SETTINGS} from "../../../../../configs/visual-settings";
import {SessionSettingsStore} from "../../../../../store/session-settings-store";


const PositionSettings = () => {
  const isActive = SessionSettingsStore.activePath.id === 1

  const submitHandler = (item: IVisualPosition) => {
    if (!isActive) return
    SessionSettingsStore.setActivePosition(item)
  }

  return (
    <div style={{opacity: isActive? 1 : 0.3}}>
      <SettingsBlock title="Position">
        {
          VISUAL_SETTINGS.positions.map(item => (
            <SettingWrap
              key={item.id}
              title={item.name}
              isActive={item.id === SessionSettingsStore.activePosition.id}
              onClick={() => submitHandler(item)}
              isLock={false}
            >
              <img src={item.icon} alt=""/>
            </SettingWrap>
          ))
        }
      </SettingsBlock>
    </div>

  );
};

export default observer(PositionSettings);
