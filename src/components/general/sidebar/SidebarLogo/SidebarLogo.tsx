import React from "react";
import { ReactComponent as Logo } from "../../../../assets/vectors/sidebarLogo.svg";
import styles from "./styles.module.scss";

interface Props {
  title: string;
  subTitle: string;
}

const SidebarLogo: React.FC<Props> = (props) => {
  return (
    <div className={styles.container}>
      <Logo className={styles.icon} />
      <p className={styles.title}>{props.title}</p>
      <p className={styles.subtitle}>{props.subTitle}</p>
    </div>
  );
};

export default SidebarLogo;
