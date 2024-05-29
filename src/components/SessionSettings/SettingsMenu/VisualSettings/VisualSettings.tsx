import { observer } from "mobx-react";
import React, { useState } from "react";
import visualSettingsStore from "../../../../store/visualSettingsStore";
import {
  BackgroundEnum,
  OrbColorEnum,
  PathSettingsEnum,
  PositionEnum,
} from "../../../../types/settings.type";
import ToggleButton from "../ToggleButton/ToggleButton";
import BackgroundSettings from "./BackgroundSettings/BackgroundSettings";
import OrbColorSettings from "./OrbColorSettings/OrbColorSettings";
import PathSettings from "./PathSettings/PathSettings";
import PositionSettings from "./PositionSettings/PositionSettings";
import SizeSettings from "./SizeSettings/SizeSettings";
import styles from "./styles.module.scss";

const VisualSettings: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { isActive, toggleIsActive } = visualSettingsStore;

  const [activeBackground, setActiveBackground] = useState<BackgroundEnum>(
    BackgroundEnum.DARK
  );
  const [activeColor, setActiveColor] = useState<OrbColorEnum>(
    OrbColorEnum.DEFAULT
  );
  const [activePath, setActivePath] = useState<PathSettingsEnum>(
    PathSettingsEnum.HORIZONTAL
  );
  const [activePosition, setActivePosition] = useState<PositionEnum>(
    PositionEnum.CENTER
  );

  const changeBackground = (background: any) => {
    if (
      background === BackgroundEnum.DARK &&
      activeColor === OrbColorEnum.DARK
    ) {
      setActiveColor(OrbColorEnum.DEFAULT);
    }
    if (
      background === BackgroundEnum.LIGHT &&
      activeColor === OrbColorEnum.DEFAULT
    ) {
      setActiveColor(OrbColorEnum.DARK);
    }
    setActiveBackground(background);
  };

  const changeColor = (color: any, isLock?: boolean) => {
    if (isLock) {
      alert("Lock");
      return;
    }

    if (
      color === OrbColorEnum.DEFAULT &&
      activeBackground === BackgroundEnum.LIGHT
    ) {
      setActiveBackground(BackgroundEnum.DARK);
    }
    if (
      color === OrbColorEnum.DARK &&
      activeBackground === BackgroundEnum.DARK
    ) {
      setActiveBackground(BackgroundEnum.LIGHT);
    }

    setActiveColor(color);
  };

  const changePath = (path: any, isLock?: boolean) => {
    if (isLock) {
      alert("Lock");
      return;
    }

    setActivePath(path);
  };

  const changePosition = (position: any, isLock?: boolean) => {
    if (isLock) {
      alert("Lock");
      return;
    }
    setActivePosition(position);
  };

  const openCloseMenu = () => {
    setIsMenuOpen(!isActive);
    toggleIsActive();
  };

  const changeActive = () => {
    setIsMenuOpen(!isActive);
    toggleIsActive();
  };
  return (
    <div className={styles.container}>
      <ToggleButton
        isActive={isActive}
        setIsActive={changeActive}
        isOpen={isMenuOpen}
        setIsOpen={openCloseMenu}
        title="Visual"
      />

      {isMenuOpen && (
        <div className={styles.settingsBlock}>
          <SizeSettings />
          <OrbColorSettings
            activeColor={activeColor}
            changeColor={changeColor}
          />
          <BackgroundSettings
            activeBackground={activeBackground}
            changeBackground={changeBackground}
          />
          <PathSettings activePath={activePath} changePath={changePath} />
          <PositionSettings
            activePosition={activePosition}
            changePosition={changePosition}
          />
        </div>
      )}
    </div>
  );
};

export default observer(VisualSettings);
