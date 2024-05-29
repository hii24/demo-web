import React from "react";
import { ReactComponent as LockIcon } from "../../../../assets/vectors/session/premiumLock.svg";
import NotificationTitleButton from "./NotificationTitleButton/NotificationTitleButton";
import styles from "./styles.module.scss";

interface Props {
  isActive: boolean;
  setIsActive: () => void;
  title: string;
  isLock: boolean;
}

const ToggleButtonSmall: React.FC<Props> = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.buttonSection}>
        <button
          className={`${styles.smallButton} ${
            !props.isActive ? styles.disabled : ""
          }`}
          onClick={props.setIsActive}
        >
          <span
            className={`${styles.smallDot} ${
              !props.isActive ? styles.disabled : ""
            }`}
          ></span>
        </button>
        <span className={styles.smallText}>{props.title}</span>

        {props.isLock && (
          <NotificationTitleButton title="Sign up to use this feature">
            <LockIcon />
          </NotificationTitleButton>
        )}
      </div>
    </div>
  );
};

export default ToggleButtonSmall;
