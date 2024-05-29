import { observer } from "mobx-react";
import React from "react";
import visualSettingsStore from "../../../../../store/visualSettingsStore";
import { SizeEnum } from "../../../../../types/settings.type";
import SettingsBlock from "../SettingsBlock/SettingsBlock";
import LargeSizeElement from "../SettingsValue/SettingsElements/Size/LargeSizeElement";
import MediumSizeElement from "../SettingsValue/SettingsElements/Size/MediumSizeElement";
import SmallSizeElement from "../SettingsValue/SettingsElements/Size/SmallSizeElement";
import SettingValue from "../SettingsValue/SettingsValue";

const SizeSettings: React.FC = () => {
  const { activeSize, setActiveSize } = visualSettingsStore;
  const changeSize = (size: any) => {
    setActiveSize(size);
  };
  return (
    <SettingsBlock title="Size">
      <SettingValue
        title="Small"
        value={SizeEnum.SMALL}
        isActive={activeSize === SizeEnum.SMALL}
        onClick={changeSize}
        isPremuim={false}
      >
        <SmallSizeElement />
      </SettingValue>
      <SettingValue
        title="Medium"
        value={SizeEnum.MEDIUM}
        isActive={activeSize === SizeEnum.MEDIUM}
        onClick={changeSize}
        isPremuim={false}
      >
        <MediumSizeElement />
      </SettingValue>
      <SettingValue
        title="Large"
        value={SizeEnum.LARGE}
        isActive={activeSize === SizeEnum.LARGE}
        onClick={changeSize}
        isPremuim={false}
      >
        <LargeSizeElement />
      </SettingValue>
    </SettingsBlock>
  );
};

export default observer(SizeSettings);
