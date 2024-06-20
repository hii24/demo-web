import React from 'react';
import styles from './styles.module.scss';
import HistoryFree from './HistoryFree/HistoryFree';
import authStore from '../../../store/store';
import HistoryList from './HistoryList/HistoryList';

const HistoryPage: React.FC = () => {
  return (
    <div className={styles.container}>
      {authStore.premium ? <HistoryList/> : <HistoryFree/>}
    </div>
  );
};

export default HistoryPage;
