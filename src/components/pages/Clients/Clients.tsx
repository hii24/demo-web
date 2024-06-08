import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { subscription } from '../../../api/subscription';
import ClientsList from './ClientsList/ClientsList';
import FreeClientsList from './FreeClientsList/FreeClientsList';
import DefaultLoader from '../../DefaultLoader/DefaultLoader';
import authStore from '../../../store/store';

const ClientsPage: React.FC = () => {


  return (
    <div className={styles.container}>
      {authStore.premium ? <ClientsList/> : <FreeClientsList/>}
    </div>
  );
};

export default ClientsPage;
