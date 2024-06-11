import React, { useEffect } from 'react';
import styles from './styles.module.scss';
import FormField from '../../../FormField/FormField';
import searchIcon from '../../../../assets/vectors/clients/search.svg';
import FillButton from '../../../Buttons/FillButton/FillButton';
import AddClientModal from '../../../Modal/AddClientModal/AddClientModal';
import AddClientWhiteIcon from '../../../../assets/vectors/clients/addClientWhite.svg';
import { clients } from '../../../../api/clients';
import { IClient } from '../../../../api/types/client.response';
import Client from './Client/Client';
import sessionStore from '../../../../store/sessionStore';

const ClientsList: React.FC = () => {
  const [searchValue, setSearchValue] = React.useState<string>('');
  const [isVisibleModal, setIsVisibleModal] = React.useState<boolean>(false);
  const [clientsList, setClientsList] = React.useState<IClient[]>([]);
  const searchClients = () => {
    const filteredClients = sessionStore.clients.filter(client =>
      client.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setClientsList(filteredClients);
  }
  useEffect(() => {
    clients().then((response) => {
      sessionStore.setClients(response.data!.clients.data);
      setClientsList(response.data!.clients.data);
    });
  }, [sessionStore.loading]);
  useEffect(() => {
    if (!searchValue)
      setClientsList(sessionStore.clients);
  }, [searchValue]);
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <FormField
          style={styles.searchInput}
          value={searchValue}
          setValue={setSearchValue}
          placeholder="Search"
          isRequired={true}
          startIcon={searchIcon}
          type="text"
          onKeyDown={(event: React.KeyboardEvent) => {
            if (event.key === 'Enter') {
              searchClients();
            }
          }}
        />
        <FillButton buttonText="Search" onClick={searchClients} isWhiteButton/>
      </div>
      <FillButton buttonText="Add client" onClick={() => setIsVisibleModal(true)}>
        <img src={AddClientWhiteIcon} alt="add client"/>
      </FillButton>
      <AddClientModal
        isVisible={isVisibleModal}
        onClose={() => setIsVisibleModal(false)}
      />

      {clientsList.map((client) => (
        <Client key={client.id} id={client.id} name={client.name} description={client.description}/>
      ))}
      {
        clientsList.length === 0 && (
          <div className={styles.noResult}>
            <h5>No results</h5>
            <p>Check the spelling and try again</p>
          </div>
        )
      }
    </div>
  );
};

export default ClientsList;
