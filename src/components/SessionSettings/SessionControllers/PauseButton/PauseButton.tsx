import { ReactComponent as PauseIcon } from "../../../../assets/vectors/session/controller/pause.svg";
import styles from "./styles.module.scss";

interface Props {
  pause: () => void;
  isDisabled: boolean;
}

const PauseButton: React.FC<Props> = (props) => {
  return (
    <button
      className={styles.button}
      onClick={props.pause}
      disabled={props.isDisabled}
    >
      <PauseIcon />
    </button>
  );
};

export default PauseButton;
