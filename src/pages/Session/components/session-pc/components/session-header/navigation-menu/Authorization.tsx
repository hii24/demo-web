import React from "react";
import styles from "./styles.module.scss";

const AuthorizationNavigation: React.FC = () => {
  return (
    <ul className={styles.list}>
      <li>
        <a href="http://localhost:3000" className={styles.link}>
          Resources & Tools
        </a>
      </li>
    </ul>
  );
};

export default AuthorizationNavigation;
