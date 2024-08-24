import styles from "./styles.module.scss";

interface Props {
  isAnimating: boolean;
  startAnimating: () => void;
  stopAnimating: () => void;
}

const StartButton: React.FC<Props> = (props) => {
  return (
    <>
      {props.isAnimating ? (
        <button className={styles.stopButton} onClick={props.stopAnimating}>
          Stop
        </button>
      ) : (
        <button className={styles.button} onClick={props.startAnimating}>
          Start
        </button>
      )}
    </>
  );
};

export default StartButton;
