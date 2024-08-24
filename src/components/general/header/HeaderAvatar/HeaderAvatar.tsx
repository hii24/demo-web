import React, { useRef, useState } from "react";
import { ReactComponent as UserIcon } from "../../../../assets/vectors/defaultAvatar.svg";
import HeaderAvatarMenu from "./HeaderAvatarMenu/HeaderAvatarMenu";
import styles from "./styles.module.scss";

interface Props {
  avatarUrl?: string;
}

const HeaderAvatar: React.FC<Props> = (props) => {
  const [isVisibleMenu, setIsVisibleMenu] = useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const closeMenu = () => {
    setIsVisibleMenu(false);
  };

  const openMenu = () => {
    setIsVisibleMenu(true);
  };

  const onClickAvatar = () => {
    isVisibleMenu ? closeMenu() : openMenu();
  };

  return (
    <div className={styles.container}>
      <button onClick={onClickAvatar} className={styles.link} ref={buttonRef}>
        {props.avatarUrl ? (
          <img src={props.avatarUrl} alt="avatar" width={40} height={40} />
        ) : (
          <div className={styles.defaultIcon}>
            <UserIcon />
          </div>
        )}
      </button>
      <HeaderAvatarMenu
        isVisible={isVisibleMenu}
        closeMenu={closeMenu}
        buttonRef={buttonRef}
      />
    </div>
  );
};

export default HeaderAvatar;
