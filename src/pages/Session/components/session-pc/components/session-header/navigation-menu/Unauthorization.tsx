import React from "react";
import styles from "./styles.module.scss";
import {UNAUTHORIZED_MENU} from "../../../../../../../const/unauthorized-menu";
import {useNavigate} from "react-router-dom";

const UnauthorizationNavigation: React.FC = () => {
  const navigate = useNavigate()

  return (
    <ul className={styles.list}>
      {
        UNAUTHORIZED_MENU.map(item => (
          <span key={Math.random()} onClick={() => navigate(item.linK)}>
            <a href="http://localhost:3000" className={styles.link}>
              {item.name}
            </a>
          </span>
        ))
      }
    </ul>
  );
};

export default UnauthorizationNavigation;
