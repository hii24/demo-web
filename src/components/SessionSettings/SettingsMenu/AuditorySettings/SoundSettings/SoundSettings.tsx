import React from "react";
import { SoundEnum } from "../../../../../types/settings.type";
import SettingsBlock from "../../VisualSettings/SettingsBlock/SettingsBlock";
import SoundValue from "./SoundValue/SoundValue";

interface Props {
  activeSound: SoundEnum;
  changeSound: (sound: any, isLock?: boolean) => void;
}

const SoundSettings: React.FC<Props> = ({ activeSound, changeSound }) => {
  return (
    <SettingsBlock title="Sound">
      <SoundValue
        title={SoundEnum.CHIME}
        value={SoundEnum.CHIME}
        isActive={activeSound === SoundEnum.CHIME}
        onClick={changeSound}
        isPremuim={false}
      />
      <SoundValue
        title={SoundEnum.BELL}
        value={SoundEnum.BELL}
        isActive={activeSound === SoundEnum.BELL}
        onClick={changeSound}
        isPremuim={false}
      />
      <SoundValue
        title={SoundEnum.CHALICE}
        value={SoundEnum.CHALICE}
        isActive={activeSound === SoundEnum.CHALICE}
        onClick={changeSound}
        isPremuim={false}
      />
      <SoundValue
        title={SoundEnum.BUBBLES}
        value={SoundEnum.BUBBLES}
        isActive={activeSound === SoundEnum.BUBBLES}
        onClick={changeSound}
        isPremuim={false}
      />
      <SoundValue
        title={SoundEnum.WAVES}
        value={SoundEnum.WAVES}
        isActive={activeSound === SoundEnum.WAVES}
        onClick={changeSound}
        isPremuim={false}
      />
      <SoundValue
        title={SoundEnum.HEARTBEAT}
        value={SoundEnum.HEARTBEAT}
        isActive={activeSound === SoundEnum.HEARTBEAT}
        onClick={changeSound}
        isPremuim={false}
      />
      <SoundValue
        title={SoundEnum.DRUMSTICK}
        value={SoundEnum.DRUMSTICK}
        isActive={activeSound === SoundEnum.DRUMSTICK}
        onClick={changeSound}
        isPremuim={false}
      />
      <SoundValue
        title={SoundEnum.FINGERSNAP}
        value={SoundEnum.FINGERSNAP}
        isActive={activeSound === SoundEnum.FINGERSNAP}
        onClick={changeSound}
        isPremuim={false}
      />
    </SettingsBlock>
  );
};

export default SoundSettings;
