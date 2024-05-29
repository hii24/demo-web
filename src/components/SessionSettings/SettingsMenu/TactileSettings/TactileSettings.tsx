import React, { useState } from "react";
import authStore from "../../../../store/store";
import ToggleButton from "../ToggleButton/ToggleButton";
import ConnectDevice from "./ConnectDevice/ConnectDevice";
import LoginBlock from "./LoginBlock/LoginBlock";
import styles from "./styles.module.scss";

const TactileSettings: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const isAuth = authStore.isAuthenticated;

  const openCloseMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsActive(!isActive);
  };

  const changeActive = () => {
    if (!isAuth) {
      alert("Not authenticated");
      setIsActive(false);
      return;
    }
    setIsActive(!isActive);
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.container}>
      <ToggleButton
        isActive={isActive}
        setIsActive={changeActive}
        isOpen={isActive}
        setIsOpen={changeActive}
        title="Tactile"
      />
      {isActive && (
        <div className={styles.settingsBlock}>
          <LoginBlock />
          <ConnectDevice />
        </div>
      )}
    </div>
  );
};

export default TactileSettings;
