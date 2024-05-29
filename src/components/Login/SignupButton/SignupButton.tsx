import React, { MouseEventHandler } from "react";
import TextButton from "../../Buttons/TextButton/TextButton";
import styles from "./styles.module.scss";

interface Props {
  text: string;
  buttonText: string;
  onClick: MouseEventHandler;
}

const SignupButton: React.FC<Props> = (props) => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>{props.text}</p>
      <TextButton onClick={props.onClick} buttonText={props.buttonText} />
    </div>
  );
};

export default SignupButton;
