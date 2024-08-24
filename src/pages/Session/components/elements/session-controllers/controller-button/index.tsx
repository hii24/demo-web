import {FC, ReactNode} from "react";
import styles from "./styles.module.scss";

interface Props {
  title: string | ReactNode;
  icon?: ReactNode;
  onClick: () => void;
  smallPadding?: boolean
}

const ControllerButton: FC<Props> = (props) => {
  const btnClass = props.smallPadding ? `${styles.button} ${styles.buttonSmall}` : styles.button

  return (
    <button
      className={btnClass}
      onClick={props.onClick}
    >
      {props.icon}
      <span className={styles.text}>{props.title}</span>
    </button>
  );
};

export default ControllerButton;
