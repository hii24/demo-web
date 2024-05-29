import React from "react";
import { ReactComponent as ChevronIcon } from "../../../../assets/vectors/navigation/chevron.svg";
import styles from "./styles.module.scss";

interface Props {
  isActive: boolean;
  isOpen: boolean;
  setIsActive: () => void;
  setIsOpen: () => void;
  title: string;
}

const ToggleButton: React.FC<Props> = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.buttonSection}>
        <button
          className={`${styles.button} ${
            !props.isActive ? styles.disabled : ""
          }`}
          onClick={props.setIsActive}
        >
          <span
            className={`${styles.dot} ${
              !props.isActive ? styles.disabled : ""
            }`}
          ></span>
        </button>
        <span className={styles.text}>{props.title}</span>
      </div>
      <button className={styles.chevronButton} onClick={props.setIsOpen}>
        <ChevronIcon
          className={`${styles.icon} ${props.isOpen ? styles.isOpen : ""}`}
        />
      </button>
    </div>
  );
};

export default ToggleButton;
