import React from 'react';
import styles from './styles.module.scss';
import HistoryFree from './HistoryFree/HistoryFree';
import authStore from '../../store/store';
import HistoryList from './HistoryList/HistoryList';
import Sidebar from "../../components/general/sidebar/Sidebar";
import HeaderLayout from "../../components/general/header";

const HistoryPage: React.FC = () => {
  return (
    <>
      <Sidebar />
      <HeaderLayout>
        <div className={styles.container}>
          {authStore.premium ? <HistoryList/> : <HistoryFree/>}
        </div>
      </HeaderLayout>
    </>
  );
};

export default HistoryPage;
