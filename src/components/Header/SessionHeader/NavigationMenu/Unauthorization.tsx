import React from "react";
import styles from "./styles.module.scss";

const UnauthorizationNavigation: React.FC = () => {
  return (
    <ul className={styles.list}>
      <li>
        <a href="http://localhost:3000" className={styles.link}>
          Home
        </a>
      </li>
      <li>
        <a href="http://localhost:3000" className={styles.link}>
          About
        </a>
      </li>
      <li>
        <a href="http://localhost:3000" className={styles.link}>
          Blog
        </a>
      </li>
      <li>
        <a href="http://localhost:3000" className={styles.link}>
          FAQ
        </a>
      </li>
      <li>
        <a href="http://localhost:3000" className={styles.link}>
          Contact
        </a>
      </li>
    </ul>
  );
};

export default UnauthorizationNavigation;
