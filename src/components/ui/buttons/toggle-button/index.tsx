import React from "react";
import { ReactComponent as ChevronIcon } from "../../../../assets/vectors/navigation/chevron.svg";
import styles from "./styles.module.scss";

interface Props {
  isActive: boolean;
  toggleActive: () => void;
  title: string;
  hideIcon?: boolean
}

const ToggleButton: React.FC<Props> = ({isActive, toggleActive, title, hideIcon}) => {
  const btnClass = `${styles.button} ${!isActive ? styles.disabled : ""}`
  const dotClass = `${styles.dot} ${!isActive ? styles.disabled : ""}`
  const iconClass = `${styles.icon} ${!isActive ? styles.isOpen : ""}`

  return (
    <div className={styles.container}  onClick={toggleActive}>
      <div className={styles.buttonSection}>
        <button className={btnClass}>
          <span className={dotClass} />
        </button>
        <span className={styles.text}>{title}</span>
      </div>
      <button className={styles.chevronButton}>
        {!hideIcon && (
          <ChevronIcon className={iconClass}/>
        )}
      </button>
    </div>
  );
};

export default ToggleButton;
