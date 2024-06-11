import React from 'react';
import styles from './styles.module.scss';
import ClientsList from './ClientsList/ClientsList';
import FreeClientsList from './FreeClientsList/FreeClientsList';
import authStore from '../../../store/store';

const ClientsPage: React.FC = () => {

  console.log(authStore.premium, 'authStore.premium')
  return (
    <div className={styles.container}>
      {authStore.premium ? <ClientsList/> : <FreeClientsList/>}
    </div>
  );
};

export default ClientsPage;
