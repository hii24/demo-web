import React, { MouseEventHandler, ReactNode } from 'react';
import styles from "./styles.module.scss";

interface Props {
  buttonText: string;
  onClick: MouseEventHandler;
  style?: string;
  children?: ReactNode;
  isWhiteButton?: boolean;
}

const TextButton: React.FC<Props> = (props) => {
  const buttonClass = props.isWhiteButton
    ? `${styles.button} ${styles.white}`
    : styles.button;

  return (
    <button className={`${buttonClass} ${props.style}`} onClick={props.onClick}>
      {props.children}
      {props.buttonText}
    </button>
  );
};

export default TextButton;
