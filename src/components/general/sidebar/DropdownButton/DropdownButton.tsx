import React, { ReactNode, useState } from 'react';
import { ReactComponent as ChevronIcon } from '../../../../assets/vectors/navigation/chevron.svg';
import styles from './styles.module.scss';
import { NavLink } from 'react-router-dom';

interface Props {
  title: string;
  children: ReactNode;
}

const DropdownButton: React.FC<Props> = (props) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <>
      <button className={styles.button} onClick={() => setIsActive(!isActive)}>
        <div className={styles.buttonInner}>
          {props.children}
          <span>{props.title}</span>
        </div>

        <ChevronIcon
          className={
            isActive ? `${styles.icon} ${styles.activeIcon}` : styles.icon
          }
        />
      </button>
      <div
        className={
          isActive
            ? `${styles.dropdownContent} ${styles.active}`
            : styles.dropdownContent
        }
      >
        <NavLink to={'resourcing'} className={styles.navLink}>Resourcing</NavLink>
        <NavLink to={'guidedSessions'} className={styles.navLink}>Guided sessions</NavLink>
        <NavLink to={'affirmations'} className={styles.navLink}>Affirmations</NavLink>
      </div>
    </>
  );
};

export default DropdownButton;
