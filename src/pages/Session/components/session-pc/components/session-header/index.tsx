import { observer } from "mobx-react";
import React from "react";
import Logo from "../../../../../../assets/images/Logomark.png";
import { ReactComponent as ZapIcon } from "../../../../../../assets/vectors/zap.svg";
import authStore from "../../../../../../store/store";
import HeaderAvatar from "../../../../../../components/general/header/HeaderAvatar/HeaderAvatar";
import HeaderButton from "../../../../../../components/general/header/HeaderButton/HeaderButton";
import AuthorizationNavigation from "./navigation-menu/Authorization";
import LoginSignup from "./navigation-menu/LoginSignup";
import UnauthorizationNavigation from "./navigation-menu/Unauthorization";
import styles from "./styles.module.scss";
import {MobileMenu} from "../../../../../../components/general/mobile-menu";
import useDeviceInfo from "../../../../../../hooks/device-info.hook";

const SessionHeader: React.FC = observer(() => {
  const isAuth = authStore.isAuthenticated;
  const {isMobile} = useDeviceInfo()

  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <div className={styles.logoContainer}>
          <img src={Logo} width={32} height={32} alt="Logo" />
          <span className={styles.logoText}>EMDR Trapper</span>
        </div>
        <>
          {
            !isMobile && (
              <>{isAuth ? <AuthorizationNavigation /> : <UnauthorizationNavigation />}</>
            )
          }
        </>
      </div>
      <div className={styles.rightBlock}>
        {
        isAuth ? (
            <div className={styles.rightSide}>
              <HeaderButton onClick={() => alert("Click")} title="Upgrade plan">
                <ZapIcon />
              </HeaderButton>
              <HeaderAvatar />
            </div>
          ) : (
            <LoginSignup />
          )
        }
        {
          isMobile && (
            <MobileMenu />
          )
        }
      </div>
    </div>
  );
});

export default SessionHeader;
