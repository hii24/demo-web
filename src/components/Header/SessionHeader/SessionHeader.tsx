import { observer } from "mobx-react";
import React from "react";
import Logo from "../../../assets/images/Logomark.png";
import { ReactComponent as ZapIcon } from "../../../assets/vectors/zap.svg";
import authStore from "../../../store/store";
import HeaderAvatar from "../HeaderAvatar/HeaderAvatar";
import HeaderButton from "../HeaderButton/HeaderButton";
import AuthorizationNavigation from "./NavigationMenu/Authorization";
import LoginSignup from "./NavigationMenu/LoginSignup";
import UnauthorizationNavigation from "./NavigationMenu/Unauthorization";
import styles from "./styles.module.scss";

const SessionHeader: React.FC = observer(() => {
  const isAuth = authStore.isAuthenticated;

  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <div className={styles.logoContainer}>
          <img src={Logo} width={32} height={32} alt="Logo" />
          <span className={styles.logoText}>EMDR Trapper</span>
        </div>
        {isAuth ? <AuthorizationNavigation /> : <UnauthorizationNavigation />}
      </div>
      {isAuth ? (
        <div className={styles.rightSide}>
          <HeaderButton onClick={() => alert("Click")} title="Upgrade plan">
            <ZapIcon />
          </HeaderButton>
          <HeaderAvatar />
        </div>
      ) : (
        <LoginSignup />
      )}
    </div>
  );
});

export default SessionHeader;
