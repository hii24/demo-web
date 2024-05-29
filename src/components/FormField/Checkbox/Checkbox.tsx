import React, { Dispatch, SetStateAction } from "react";
import { ReactComponent as CheckboxIcon } from "../../../assets/vectors/checkBox.svg";
import styles from "./styles.module.scss";

interface Props {
  text: string;
  setValue: Dispatch<SetStateAction<boolean>>;
  checked: boolean;
  filedName: string;
}

const Checkbox: React.FC<Props> = (props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setValue(event.target.checked);
  };
  return (
    <label className={styles.container}>
      <input
        type="checkbox"
        className={styles.checkbox}
        id={props.filedName}
        checked={props.checked}
        onChange={handleChange}
      />
      <div className={styles.customCheckbox}>
        <CheckboxIcon />
      </div>
      <label className={styles.label} htmlFor={props.filedName}>
        {props.text}
      </label>
    </label>
  );
};

export default Checkbox;
