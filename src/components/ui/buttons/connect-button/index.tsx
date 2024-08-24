import React from "react";
import { ReactComponent as BluetoothIcon } from "../../../../assets/vectors/session/bluetooth.svg";
import { ReactComponent as LoadingIcon } from "../../../../assets/vectors/session/loading.svg";
import styles from "./styles.module.scss";

interface Props {
  title: string;
  onClick: () => void;
  isPending: boolean;
}

const ConnectButton: React.FC<Props> = (props) => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>{props.title}</span>
      <button onClick={props.onClick} className={styles.button}>
        {props.isPending ? (
          <LoadingIcon className={styles.rotating} />
        ) : (
          <BluetoothIcon />
        )}
        <span className={styles.text}>
          {props.isPending ? "Waiting for the device..." : "Connect device"}
        </span>
      </button>
    </div>
  );
};

export default ConnectButton;
