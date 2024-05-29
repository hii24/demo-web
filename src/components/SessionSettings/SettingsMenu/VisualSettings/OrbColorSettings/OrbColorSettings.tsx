import { observer } from "mobx-react";
import React from "react";
import visualSettingsStore from "../../../../../store/visualSettingsStore";
import { OrbColorEnum } from "../../../../../types/settings.type";
import SettingsBlock from "../SettingsBlock/SettingsBlock";
import OrbDarkColorElement from "../SettingsValue/SettingsElements/Color/OrbDarkColorElement";
import OrbDefaultColorElement from "../SettingsValue/SettingsElements/Color/OrbDefaultColorElement";
import OrbOrangeColorElement from "../SettingsValue/SettingsElements/Color/OrbPinkColorElement";
import OrdGreenColorElement from "../SettingsValue/SettingsElements/Color/OrdGreenColorElement";
import OrdOrangeColorElement from "../SettingsValue/SettingsElements/Color/OrdOrangeColorElement";
import SettingValue from "../SettingsValue/SettingsValue";

interface Props {
  activeColor: OrbColorEnum;
  changeColor: (color: any, isLock?: boolean) => void;
}

const OrbColorSettings: React.FC<Props> = () => {
  const { activeColor, setActiveColor } = visualSettingsStore;

  const changeColor = (color: any, isLock?: boolean) => {
    setActiveColor(color);
  };
  return (
    <SettingsBlock title="Color">
      <SettingValue
        title="Default"
        value={OrbColorEnum.DEFAULT}
        isActive={OrbColorEnum.DEFAULT === activeColor}
        onClick={changeColor}
        isPremuim={false}
      >
        <OrbDefaultColorElement />
      </SettingValue>
      <SettingValue
        title="Dark"
        value={OrbColorEnum.DARK}
        isActive={OrbColorEnum.DARK === activeColor}
        onClick={changeColor}
        isPremuim={false}
      >
        <OrbDarkColorElement />
      </SettingValue>
      <SettingValue
        title="Orange"
        value={OrbColorEnum.ORANGE}
        isActive={OrbColorEnum.ORANGE === activeColor}
        onClick={changeColor}
        isPremuim={false}
        isLock={true}
      >
        <OrdOrangeColorElement />
      </SettingValue>
      <SettingValue
        title="Green"
        value={OrbColorEnum.GREEN}
        isActive={OrbColorEnum.GREEN === activeColor}
        onClick={changeColor}
        isPremuim={false}
      >
        <OrdGreenColorElement />
      </SettingValue>
      <SettingValue
        title="Pink"
        value={OrbColorEnum.PINK}
        isActive={OrbColorEnum.PINK === activeColor}
        onClick={changeColor}
        isPremuim={false}
      >
        <OrbOrangeColorElement />
      </SettingValue>
    </SettingsBlock>
  );
};

export default observer(OrbColorSettings);
