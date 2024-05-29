import React from "react";
import logo from "../../../assets/images/Logomark.png";
import { ReactComponent as CloseIcon } from "../../../assets/vectors/x-close.svg";
import styles from "./styles.module.scss";

interface Props {
  title: string;
  subTitle: string;
}

const LoginHeader: React.FC<Props> = (props) => {
  return (
    <div className={styles.container}>
      <img src={logo} alt="logo" width={32} height={32} />
      <h1 className={styles.title}>{props.title}</h1>
      <h2 className={styles.subTitle}>{props.subTitle}</h2>
      <a href="http://127.0.0.1" className={styles.closeButton}>
        <CloseIcon className={styles.icon} />
      </a>
    </div>
  );
};

export default LoginHeader;
