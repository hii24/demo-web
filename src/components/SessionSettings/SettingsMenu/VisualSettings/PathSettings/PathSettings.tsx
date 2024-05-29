import { observer } from "mobx-react";
import React from "react";
import { ReactComponent as DiagonalUpRightIcon } from "../../../../../assets/vectors/session/path/diadonalRightUp.svg";
import { ReactComponent as DiagonalUpLeftIcon } from "../../../../../assets/vectors/session/path/diagonalLeftUp.svg";
import { ReactComponent as HorizontalIcon } from "../../../../../assets/vectors/session/path/horizontal.svg";
import { ReactComponent as RandomIcon } from "../../../../../assets/vectors/session/path/random.svg";
import { ReactComponent as VerticalIcon } from "../../../../../assets/vectors/session/path/vertical.svg";
import visualSettingsStore from "../../../../../store/visualSettingsStore";
import { PathSettingsEnum } from "../../../../../types/settings.type";
import SettingsBlock from "../SettingsBlock/SettingsBlock";
import SettingValuePath from "../SettingsValue/SettingsValuePath";

interface Props {
  activePath: PathSettingsEnum;
  changePath: (path: any, isLock?: boolean) => void;
}

const PathSettings: React.FC<Props> = () => {
  const { activePath, setActivePath } = visualSettingsStore;

  const changePath = (path: any, isLock?: boolean) => {
    setActivePath(path);
  };
  return (
    <SettingsBlock title="Path">
      <SettingValuePath
        title="Horizontal"
        value={PathSettingsEnum.HORIZONTAL}
        isActive={activePath === PathSettingsEnum.HORIZONTAL}
        onClick={changePath}
        isPremuim={false}
      >
        <HorizontalIcon />
      </SettingValuePath>
      <SettingValuePath
        title="Diagonal"
        value={PathSettingsEnum.DIAGONAL_UP_LEFT}
        isActive={activePath === PathSettingsEnum.DIAGONAL_UP_LEFT}
        onClick={changePath}
        isPremuim={false}
        isLock={true}
      >
        <DiagonalUpLeftIcon />
      </SettingValuePath>
      <SettingValuePath
        title="Diagonal"
        value={PathSettingsEnum.DIAGONAL_UP_RIGHT}
        isActive={activePath === PathSettingsEnum.DIAGONAL_UP_RIGHT}
        onClick={changePath}
        isPremuim={false}
        isLock={true}
      >
        <DiagonalUpRightIcon />
      </SettingValuePath>
      <SettingValuePath
        title="Vertical"
        value={PathSettingsEnum.VERTICAL}
        isActive={activePath === PathSettingsEnum.VERTICAL}
        onClick={changePath}
        isPremuim={false}
        isLock={true}
      >
        <VerticalIcon />
      </SettingValuePath>
      <SettingValuePath
        title="Random"
        value={PathSettingsEnum.RANDOM}
        isActive={activePath === PathSettingsEnum.RANDOM}
        onClick={changePath}
        isPremuim={false}
        isLock={true}
      >
        <RandomIcon />
      </SettingValuePath>
    </SettingsBlock>
  );
};

export default observer(PathSettings);
