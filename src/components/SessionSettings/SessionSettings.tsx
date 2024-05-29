import { observer } from "mobx-react";
import React from "react";
import { ReactComponent as ChevronIcon } from "../../assets/vectors/navigation/chevron.svg";
import visualSettingsStore from "../../store/visualSettingsStore";
import SessionSettingsHeader from "./SessionSettingsHeader/SessionSettingsHeader";
import SettingsMenu from "./SettingsMenu/SettingsMenu";
import styles from "./styles.module.scss";

interface Props {
  isOpen: boolean;
  closeOpen: () => void;
}

const SessionSettings: React.FC<Props> = () => {
  const { isMenuOpen, toggleMenu } = visualSettingsStore;

  return (
    <div className={styles.positionParent}>
      <div
        className={`${styles.container} ${!isMenuOpen ? styles.isClose : ""}`}
      >
        <SessionSettingsHeader title="Session settings" onClick={toggleMenu} />
        <SettingsMenu />
      </div>
      <button className={styles.openButton} onClick={toggleMenu}>
        <ChevronIcon
          className={`${styles.chevronIcon} ${
            !isMenuOpen ? styles.isClose : ""
          }`}
        />
      </button>
    </div>
  );
};

export default observer(SessionSettings);
