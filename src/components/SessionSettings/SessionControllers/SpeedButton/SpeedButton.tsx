import { observer } from "mobx-react";
import { ReactComponent as ChevronIcon } from "../../../../assets/vectors/session/controller/chevron.svg";
import controllerSettingsStore from "../../../../store/controllerSettingsStore";
import styles from "./styles.module.scss";

const SpeedButton: React.FC = () => {
  const { speed, setSpeed, isPlaying, isPaused } = controllerSettingsStore;

  return (
    <div className={styles.container}>
      <button
        className={`${styles.button} ${styles.left}`}
        disabled={speed === 1 || isPlaying}
        onClick={() => setSpeed(speed - 1)}
      >
        <ChevronIcon className={styles.down} />
      </button>
      <div className={styles.info}>
        <span className={styles.text}>
          Speed <span className={styles.label}>{speed}</span>
        </span>
      </div>
      <button
        className={`${styles.button} ${styles.right}`}
        disabled={speed === 10 || isPlaying}
        onClick={() => setSpeed(speed + 1)}
      >
        <ChevronIcon className={styles.up} />
      </button>
    </div>
  );
};

export default observer(SpeedButton);
