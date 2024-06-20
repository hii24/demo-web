import React from 'react';
import styles from './styles.module.scss';
import Banner from '../../../Banner/Banner';
import FreeSessionItem from './FreeSessionItem/FreeSessionItem';

const HistoryFree: React.FC = () => {
  return (
    <div className={styles.container}>
      <Banner/>
      <div >
        <FreeSessionItem/>
        <FreeSessionItem/>
      </div>
    </div>
  );
};

export default HistoryFree;
