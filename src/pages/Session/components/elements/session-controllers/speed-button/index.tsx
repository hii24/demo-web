import { observer } from "mobx-react";
import { ReactComponent as ChevronIcon } from "../../../../../../assets/vectors/session/controller/chevron.svg";
import styles from "./styles.module.scss";
import {ActiveSessionStore} from "../../../../../../store/active-session-store";
import {SessionSettingsStore} from "../../../../../../store/session-settings-store";

const SpeedButton = () => {

  return (
    <div className={styles.container}>
      <button
        className={`${styles.button} ${styles.left}`}
        disabled={SessionSettingsStore.speed === 1}
        onClick={() => SessionSettingsStore.incrementSpeed()}
      >
        <ChevronIcon className={styles.down} />
      </button>
      <div className={styles.info}>
        <span className={styles.text}>
          Speed <span className={styles.label}>{SessionSettingsStore.speed}</span>
        </span>
      </div>
      <button
        className={`${styles.button} ${styles.right}`}
        disabled={SessionSettingsStore.speed === 10}
        onClick={() => SessionSettingsStore.addSpeed()}
      >
        <ChevronIcon className={styles.up} />
      </button>
    </div>
  );
};

export default observer(SpeedButton);
