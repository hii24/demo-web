import { observer } from "mobx-react";
import React from "react";
import visualSettingsStore from "../../../../../store/visualSettingsStore";
import { BackgroundEnum } from "../../../../../types/settings.type";
import SettingsBlock from "../SettingsBlock/SettingsBlock";
import BackgroundBlueHazeElement from "../SettingsValue/SettingsElements/Backgroud/BackgroundBlueHazeElement";
import BackgroundDarkElement from "../SettingsValue/SettingsElements/Backgroud/BackgroundDardElement";
import BackgroundEvergladeElement from "../SettingsValue/SettingsElements/Backgroud/BackgroundEvergaleElement";
import BackgroundFjordElement from "../SettingsValue/SettingsElements/Backgroud/BackgroundFjordElement";
import BackgroundLightElement from "../SettingsValue/SettingsElements/Backgroud/BackgroundLightElement";
import BackgroundMontainElement from "../SettingsValue/SettingsElements/Backgroud/BackgroundMontainElement";
import BackgroundPeacockElement from "../SettingsValue/SettingsElements/Backgroud/BackgroundPeacockElement";
import BackgroundRiverElement from "../SettingsValue/SettingsElements/Backgroud/BackgroundRiverElement";
import BackgroundValleyElement from "../SettingsValue/SettingsElements/Backgroud/BackgroundValleyElement";
import BackgroundVolcanoElement from "../SettingsValue/SettingsElements/Backgroud/BackgroundVolcanoElement";
import SettingValue from "../SettingsValue/SettingsValue";

interface Props {
  activeBackground: BackgroundEnum;
  changeBackground: (background: any) => void;
}

const BackgroundSettings: React.FC<Props> = () => {
  const { activeBackground, setActiveBackground } = visualSettingsStore;
  const changeBackground = (value: BackgroundEnum, isLock?: boolean) => {
    setActiveBackground(value);
  };
  console.log(activeBackground);
  return (
    <SettingsBlock title="Background">
      <SettingValue
        title="Dark"
        value={BackgroundEnum.DARK}
        isActive={activeBackground === BackgroundEnum.DARK}
        onClick={changeBackground}
        isPremuim={false}
      >
        <BackgroundDarkElement />
      </SettingValue>
      <SettingValue
        title="Light"
        value={BackgroundEnum.LIGHT}
        isActive={activeBackground === BackgroundEnum.LIGHT}
        onClick={changeBackground}
        isPremuim={false}
      >
        <BackgroundLightElement />
      </SettingValue>
      <SettingValue
        title="Blue haze"
        value={BackgroundEnum.BLUE_HAZE}
        isActive={activeBackground === BackgroundEnum.BLUE_HAZE}
        onClick={changeBackground}
        isPremuim={false}
      >
        <BackgroundBlueHazeElement />
      </SettingValue>
      <SettingValue
        title="Peacock"
        value={BackgroundEnum.PEACOOCK}
        isActive={activeBackground === BackgroundEnum.PEACOOCK}
        onClick={changeBackground}
        isPremuim={false}
      >
        <BackgroundPeacockElement />
      </SettingValue>
      <SettingValue
        title="Everglade"
        value={BackgroundEnum.EVERGLADE}
        isActive={activeBackground === BackgroundEnum.EVERGLADE}
        onClick={changeBackground}
        isPremuim={false}
      >
        <BackgroundEvergladeElement />
      </SettingValue>
      <SettingValue
        title="River"
        value={BackgroundEnum.RIVER}
        isActive={activeBackground === BackgroundEnum.RIVER}
        onClick={changeBackground}
        isPremuim={false}
      >
        <BackgroundRiverElement />
      </SettingValue>
      <SettingValue
        title="Montain"
        value={BackgroundEnum.MOUNTAIN}
        isActive={activeBackground === BackgroundEnum.MOUNTAIN}
        onClick={changeBackground}
        isPremuim={false}
      >
        <BackgroundMontainElement />
      </SettingValue>
      <SettingValue
        title="Volcano"
        value={BackgroundEnum.VOLCANO}
        isActive={activeBackground === BackgroundEnum.VOLCANO}
        onClick={changeBackground}
        isPremuim={false}
      >
        <BackgroundVolcanoElement />
      </SettingValue>
      <SettingValue
        title="Valley"
        value={BackgroundEnum.VALLEY}
        isActive={activeBackground === BackgroundEnum.VALLEY}
        onClick={changeBackground}
        isPremuim={false}
      >
        <BackgroundValleyElement />
      </SettingValue>
      <SettingValue
        title="Fjord"
        value={BackgroundEnum.FJORD}
        isActive={activeBackground === BackgroundEnum.FJORD}
        onClick={changeBackground}
        isPremuim={false}
      >
        <BackgroundFjordElement />
      </SettingValue>
    </SettingsBlock>
  );
};

export default observer(BackgroundSettings);
