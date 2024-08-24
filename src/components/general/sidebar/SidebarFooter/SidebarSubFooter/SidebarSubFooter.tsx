import React from "react";
import styles from "./styles.module.scss";
const SidebarSubFooter: React.FC = () => {
  return (
    <ul className={styles.list}>
      <li>
        <a href="http://localhost:3000" className={styles.link}>
          Terms of sevices
        </a>
      </li>
      <li>
        <a href="http://localhost:3000" className={styles.link}>
          Privacy police
        </a>
      </li>
    </ul>
  );
};

export default SidebarSubFooter;
