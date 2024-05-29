import React, { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { ReactComponent as ZapIcon } from "../../assets/vectors/zap.svg";
import { headerTitle } from "../../utils/headerTitle";
import HeaderAvatar from "./HeaderAvatar/HeaderAvatar";
import HeaderButton from "./HeaderButton/HeaderButton";
import styles from "./styles.module.scss";

interface Props {
  children: ReactNode;
}

const HeaderLayout: React.FC<Props> = (props) => {
  const location = useLocation();
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>{headerTitle(location.pathname)}</h1>
        <div className={styles.side}>
          <HeaderButton onClick={() => alert("Click")} title="Upgrade plan">
            <ZapIcon />
          </HeaderButton>
          <HeaderAvatar />
        </div>
      </div>
      {props.children}
    </div>
  );
};

export default HeaderLayout;
