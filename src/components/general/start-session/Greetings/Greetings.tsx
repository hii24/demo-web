import { observer } from "mobx-react";
import React from "react";
import authStore from "../../../../store/store";
import styles from "./styles.module.scss";

const Greetings: React.FC = observer(() => {
  const name = authStore.user?.first_name || "Anonymous";
  return <span className={styles.text}>Hi, {name}!</span>;
});

export default Greetings;
