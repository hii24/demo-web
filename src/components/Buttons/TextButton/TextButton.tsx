import React, { MouseEventHandler, ReactNode } from 'react';
import styles from "./styles.module.scss";

interface Props {
  buttonText: string;
  onClick: MouseEventHandler;
  style?: string;
  children?: ReactNode;
}

const TextButton: React.FC<Props> = (props) => {
  return (
    <button className={`${styles.button} ${props.style}`} onClick={props.onClick}>
      {props.children}
      {props.buttonText}
    </button>
  );
};

export default TextButton;
