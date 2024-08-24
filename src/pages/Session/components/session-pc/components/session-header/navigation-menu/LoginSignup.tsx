import React from "react";
import FillLinkButton from "./components/link-buttons/FillLinkButton";
import LinkButton from "./components/link-buttons/LinkButton";
import styles from "./styles.module.scss";

const LoginSignup: React.FC = () => {
  return (
    <ul className={styles.list}>
      <li>
        <LinkButton to="/login" title="Login" />
      </li>
      <li>
        <FillLinkButton to="/chooseRole" title="Sign up" />
      </li>
    </ul>
  );
};

export default LoginSignup;