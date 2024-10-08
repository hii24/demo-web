import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import DefaultLoader from '../../components/ui/loaders/default-loader';
import { getClient } from '../../api/getClient';
import { useLocation } from 'react-router-dom';
import ClientInfo from './ClientInfo/ClientInfo';
import { IClient } from '../../api/types/client.response';
import ClientNotes from './ClientNotes/ClientNotes';
import PreviousSessions from './PreviousSessions/PreviousSessions';
import Sidebar from "../../components/general/sidebar/Sidebar";
import HeaderLayout from "../../components/general/header";

const ClientProfile: React.FC = () => {
  const [client, setClient] = useState<IClient>({created: 0, description: '', id: 0, name: '', notes: ''});
  const [loading, setLoading] = useState<boolean>(true)
  const location = useLocation();

  const handleEditClient = async () => {
    getClient(location.state.id).then((response) => {
      setClient(response.data!.client);
      setLoading(false);
    });
  };
  useEffect(() => {
    handleEditClient();
  }, []);
  if (loading) {
    return <DefaultLoader/>;
  }
  return (
    <>
      <Sidebar />
      <HeaderLayout>
        <div className={styles.container}>
          <ClientInfo handleEditClient={handleEditClient} notes={client.notes} name={client.name}
                      description={client.description} id={client.id}/>
          <ClientNotes handleEditClient={handleEditClient} notes={client.notes} name={client.name}
                       description={client.description} id={client.id}/>
          <PreviousSessions id={client.id}/>
        </div>
      </HeaderLayout>
    </>
  );
};

export default ClientProfile;
