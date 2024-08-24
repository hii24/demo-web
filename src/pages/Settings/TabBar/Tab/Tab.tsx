// Tab.tsx
import React from 'react';
import styles from './styles.module.scss';

interface TabProps {
  label: string;
  isActive: boolean;
  ref?: React.Ref<HTMLAnchorElement>;
  onClick: () => void;
}

const Tab: React.FC<TabProps> = ({label, isActive, ref, onClick}) => {
  return (
    <div onClick={onClick} className={`${styles.container} ${isActive ? styles.isActive : ''}`}>
      {label}
    </div>
  );
};

export default Tab;
