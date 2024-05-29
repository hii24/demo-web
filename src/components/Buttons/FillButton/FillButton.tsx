import React, { MouseEventHandler, ReactNode } from "react";
import styles from "./styles.module.scss";

interface Props {
  buttonText: string;
  onClick: MouseEventHandler;
  isWhiteButton?: boolean;
  children?: ReactNode;
  inactive?: boolean;
  isCopyButton?: boolean;
  style?: string;
  error?: boolean;
}

const FillButton: React.FC<Props> = ({
  buttonText,
  onClick,
  isWhiteButton = false,
  children,
  inactive,
  isCopyButton,
  style,
  error
}) => {
  const buttonClass = isWhiteButton
    ? `${styles.button} ${styles.white}`
    : styles.button;

  const inactiveClass = inactive
    ? `${buttonClass} ${styles.inactive}`
    : buttonClass;
  return (
    <button
      className={`${inactiveClass} ${isCopyButton ? styles.copy : ""} ${error ? styles.red : ''} ${style}`}
      onClick={onClick}
      disabled={inactive}
    >
      {children}
      {buttonText}
    </button>
  );
};

export default FillButton;
