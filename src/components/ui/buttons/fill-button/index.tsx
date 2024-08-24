import React, {MouseEventHandler, ReactNode} from 'react';
import styles from './styles.module.scss';

interface Props {
  buttonText: string;
  onClick: MouseEventHandler;
  isWhiteButton?: boolean;
  children?: ReactNode;
  inactive?: boolean;
  isCopyButton?: boolean;
  style?: string;
  error?: boolean;
  fitContent?: boolean;
  gap?: string;
  childrenAfter?: boolean;
}

const FillButton: React.FC<Props> = ({
                                       buttonText,
                                       onClick,
                                       isWhiteButton = false,
                                       children,
                                       inactive,
                                       isCopyButton,
                                       style,
                                       gap,
                                       fitContent,
                                       childrenAfter,
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
      className={`${inactiveClass} ${isCopyButton ? styles.copy : ''} ${error ? styles.red : ''} ${fitContent ? styles.fitContent : ''} ${style} `}
      onClick={onClick}
      style={{gap: gap ? gap : '16px'}}
      disabled={inactive}
    >
      {childrenAfter ? null : children}
      {buttonText}
      {childrenAfter ? children : null}
    </button>
  );
};

export default FillButton;
