import { ReactNode } from "react";
import styles from "./styles.module.scss";

interface Props {
  children: ReactNode;
  text: string;
}

const CopiedButton: React.FC<Props> = (props) => {
  return (
    <button className={styles.copiedButton}>
      {props.children}
      <span>{props.text}</span>
    </button>
  );
};

export default CopiedButton;
