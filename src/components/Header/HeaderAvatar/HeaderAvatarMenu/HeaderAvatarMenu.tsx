import React, { RefObject, useEffect, useRef } from "react";
import { ReactComponent as UserIcon } from "../../../../assets/vectors/defaultAvatar.svg";
import { ReactComponent as LogoutIcon } from "../../../../assets/vectors/navigation/logout.svg";
import { ReactComponent as SettingIcon } from "../../../../assets/vectors/navigation/settings.svg";
import { ReactComponent as ZapIcon } from "../../../../assets/vectors/zap.svg";
import authStore from "../../../../store/store";
import HeaderMenuNavLink from "./HeaderMenuNavLink/HeaderMenuNavLink";
import styles from "./styles.module.scss";

interface Props {
  isVisible: boolean;
  closeMenu: () => void;
  buttonRef: RefObject<HTMLButtonElement>;
}

const HeaderAvatarMenu: React.FC<Props> = (props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (props.buttonRef.current === event.currentTarget) {
        return;
      }

      if (
        containerRef.current !== event.currentTarget &&
        !props.buttonRef.current?.contains(event.target as Node)
      ) {
        props.closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const logout = () => {
    props.closeMenu();
    authStore.logout();
  };

  return (
    <div
      className={`${styles.container} ${props.isVisible ? styles.visible : ""}`}
    >
      <HeaderMenuNavLink
        onClick={props.closeMenu}
        title="My profile"
        to="/profile"
      >
        <UserIcon className={styles.icon} />
      </HeaderMenuNavLink>
      <HeaderMenuNavLink
        onClick={props.closeMenu}
        title="Premium plan"
        to="/premium"
      >
        <ZapIcon className={styles.icon} />
      </HeaderMenuNavLink>
      <HeaderMenuNavLink
        onClick={props.closeMenu}
        title="Settings"
        to="/settings"
      >
        <SettingIcon className={styles.icon} />
      </HeaderMenuNavLink>
      <HeaderMenuNavLink onClick={logout} title="Sign Out" to="/login">
        <LogoutIcon className={styles.icon} />
      </HeaderMenuNavLink>
    </div>
  );
};

export default HeaderAvatarMenu;
