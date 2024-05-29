import React from 'react';
import styles from './styles.module.scss';
import Banner from './Banner/Banner';
import FreeClient from './FreeClient/FreeClient';
import addClient from '../../../../assets/vectors/clients/addClient.svg'

const FreeClientsList: React.FC = () => {
  return (
    <div className={styles.container}>
      <Banner/>
      <FreeClient/>
      <FreeClient/>
      <div className={styles.btn}>
        <img src={addClient} alt="addClient"/>
        <p>Add client</p>
      </div>
    </div>
  );
};

export default FreeClientsList;
