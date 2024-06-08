import React from 'react';
import styles from './styles.module.scss';
import MediaLockIcon from '../../../assets/vectors/resourcing/mediaLock.svg';

const PremiumButton: React.FC = () => {

  return (
    <div className={styles.container}>
      <img src={MediaLockIcon} alt="play icon"/>
      <p>Premium</p>
    </div>
  );
};

export default PremiumButton;
