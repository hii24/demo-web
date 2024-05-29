import { ReactNode } from "react";
import styles from "./styles.module.scss";

interface Props {
  title: string;
  children?: ReactNode;
  onClick: () => void;
  isBottom?: boolean;
}

const ControllerButton: React.FC<Props> = (props) => {
  return (
    <button
      className={`${styles.button} ${props.isBottom ? styles.bottom : ""}`}
      onClick={props.onClick}
    >
      {props.children}
      <span className={styles.text}>{props.title}</span>
    </button>
  );
};

export default ControllerButton;
