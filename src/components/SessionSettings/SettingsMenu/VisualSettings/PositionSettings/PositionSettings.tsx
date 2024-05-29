import { observer } from "mobx-react";
import React from "react";
import { ReactComponent as BottomIcon } from "../../../../../assets/vectors/session/position/bottom.svg";
import { ReactComponent as CenterIcon } from "../../../../../assets/vectors/session/position/center.svg";
import { ReactComponent as TopIcon } from "../../../../../assets/vectors/session/position/top.svg";
import visualSettingsStore from "../../../../../store/visualSettingsStore";
import { PositionEnum } from "../../../../../types/settings.type";
import SettingsBlock from "../SettingsBlock/SettingsBlock";
import SettingValue from "../SettingsValue/SettingsValue";

interface Props {
  activePosition: PositionEnum;
  changePosition: (position: any, isLock?: boolean) => void;
}

const PositionSettings: React.FC<Props> = () => {
  const { activePosition, setActivePosition } = visualSettingsStore;

  const changePosition = (position: any, isLock?: boolean) => {
    setActivePosition(position);
  };

  return (
    <SettingsBlock title="Position">
      <SettingValue
        title="Center"
        value={PositionEnum.CENTER}
        isActive={PositionEnum.CENTER === activePosition}
        onClick={changePosition}
        isPremuim={false}
      >
        <CenterIcon />
      </SettingValue>
      <SettingValue
        title="Top"
        value={PositionEnum.TOP}
        isActive={PositionEnum.TOP === activePosition}
        onClick={changePosition}
        isPremuim={false}
      >
        <TopIcon />
      </SettingValue>
      <SettingValue
        title="Bottom"
        value={PositionEnum.BOTTOM}
        isActive={PositionEnum.BOTTOM === activePosition}
        onClick={changePosition}
        isPremuim={false}
      >
        <BottomIcon />
      </SettingValue>
    </SettingsBlock>
  );
};

export default observer(PositionSettings);
