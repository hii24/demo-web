import React from 'react';
import styles from './styles.module.scss';
import ClientsList from './ClientsList/ClientsList';
import FreeClientsList from './FreeClientsList/FreeClientsList';
import authStore from '../../store/store';
import Sidebar from "../../components/general/sidebar/Sidebar";
import HeaderLayout from "../../components/general/header";

const ClientsPage: React.FC = () => {

  return (
    <>
      <Sidebar />
      <HeaderLayout>
        <div className={styles.container}>
          {authStore.premium ? <ClientsList/> : <FreeClientsList/>}
        </div>
      </HeaderLayout>
    </>
  );
};

export default ClientsPage;
