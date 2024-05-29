import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { subscription } from '../../../api/subscription';
import ClientsList from './ClientsList/ClientsList';
import FreeClientsList from './FreeClientsList/FreeClientsList';
import sessionStore from '../../../store/sessionStore';
import DefaultLoader from '../../DefaultLoader/DefaultLoader';

const ClientsPage: React.FC = () => {
  const [loading,setLoading] = useState<boolean>(true)
  const [hasPremium, setHasPremium] = useState<boolean>(false)

  useEffect(() => {
    subscription().then((response) => {
      setHasPremium(response.data!.subscription.status);
      setLoading(false);
    });
  }, []);
  if (loading) {
    return <DefaultLoader/>;
  }
  return (
    <div className={styles.container}>
      {!hasPremium ? <ClientsList/> : <FreeClientsList/>}
    </div>
  );
};

export default ClientsPage;
