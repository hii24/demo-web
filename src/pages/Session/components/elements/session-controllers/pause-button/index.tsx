import { ReactComponent as PauseIcon } from "../../../../../../assets/vectors/session/controller/pause.svg";
import { ReactComponent as StartIcon } from "../../../../../../assets/vectors/session/controller/play.svg";
import styles from "./styles.module.scss";

interface Props {
  pause: () => void;
  isDisabled: boolean;
  isPause: boolean
}

const PauseButton: React.FC<Props> = (props) => {
  return (
    <button
      className={styles.button}
      onClick={props.pause}
    >
      {
        !props.isPause ? <PauseIcon /> : <StartIcon />
      }
    </button>
  );
};

export default PauseButton;
