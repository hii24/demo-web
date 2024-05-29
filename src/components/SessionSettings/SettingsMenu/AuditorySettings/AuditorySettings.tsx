import React, { useState } from "react";
import authStore from "../../../../store/store";
import { SoundEnum } from "../../../../types/settings.type";
import ToggleButtonSmall from "../ToggleButton/ ToggleButtonSmall";
import ToggleButton from "../ToggleButton/ToggleButton";
import SoundSettings from "./SoundSettings/SoundSettings";
import styles from "./styles.module.scss";

const AuditorySettings: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [sound, setSound] = useState<SoundEnum>(SoundEnum.CHIME);
  const [isActiveSound, setIsActiveSound] = useState<boolean>(false);
  const isAuth = authStore.isAuthenticated;

  const changeActiveSound = () => {
    if (!isAuth) {
      return alert("Lock");
    }
    setIsActiveSound(!isActiveSound);
  };

  const changeSound = (sound: any, isLock?: boolean) => {
    if (isLock) {
      alert("Lock");
      return;
    }

    setSound(sound);
  };

  const openCloseMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsActive(!isMenuOpen);
  };

  const changeActive = () => {
    setIsActive(!isActive);
    setIsMenuOpen(!isActive);
  };
  return (
    <div className={styles.container}>
      <ToggleButton
        isActive={isActive}
        setIsActive={changeActive}
        isOpen={isMenuOpen}
        setIsOpen={openCloseMenu}
        title="Auditory"
      />
      {isMenuOpen && (
        <div className={styles.settingsBlock}>
          <SoundSettings activeSound={sound} changeSound={changeSound} />
          <ToggleButtonSmall
            title="Mute for therapist"
            isActive={isActiveSound}
            setIsActive={changeActiveSound}
            isLock={!isAuth}
          />
        </div>
      )}
    </div>
  );
};

export default AuditorySettings;
