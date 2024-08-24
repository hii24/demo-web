import React from 'react';
import styles from './styles.module.scss';
import avatarClient from '../../../../assets/vectors/clients/clientAvatar.svg'

const FreeClient: React.FC = () => {


  return (
    <div className={styles.container}>
      <img src={avatarClient} alt="avatar"/>
      <div>
        <span></span><span></span>
      </div>
    </div>
  );
};

export default FreeClient;
