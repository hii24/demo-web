import React from "react";
import { ReactComponent as CheckNo } from "../../../assets/vectors/checkNo.svg";
import { ReactComponent as CheckYes } from "../../../assets/vectors/checkYes.svg";
import styles from "./styles.module.scss";

interface Props {
  isChecked: boolean;
  text: string;
}

const CheckText: React.FC<Props> = (props) => {
  return (
    <div className={styles.container}>
      {props.isChecked ? <CheckYes /> : <CheckNo />}
      <p className={styles.text}>{props.text}</p>
    </div>
  );
};

export default CheckText;
