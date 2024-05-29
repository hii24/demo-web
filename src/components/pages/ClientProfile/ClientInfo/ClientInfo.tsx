import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import FillButton from '../../../Buttons/FillButton/FillButton';
import TextButton from '../../../Buttons/TextButton/TextButton';
import editClientIcon from '../../../../assets/vectors/clients/editClient.svg';
import RemoveEntityModal from '../../../Modal/RemoveEntityModal/RemoveEntityModal';
import { deleteClient } from '../../../../api/deleteClient';
import { useNavigate } from 'react-router-dom';
import FormField from '../../../FormField/FormField';
import { validateClientName } from '../../../../utils/validation/client-validation';
import { updateClient } from '../../../../api/updateClient';

interface Props {
  name: string;
  notes?: string;
  description: string;
  id: number;
  handleEditClient: () => Promise<void>;
}

const ClientInfo: React.FC<Props> = (props) => {
  const [editClient, setEditClient] = useState<boolean>(false);
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [name, setName] = useState<string>(props.name);
  const [description, setDescription] = useState<string>(props.description || '');
  const [nameError, setNameError] = useState<string>('');
  useEffect(() => {
    name && setNameError('');
  }, [name]);
  useEffect(() => {
    setDescription(props.description);
    setName(props.name);
  }, [props.name, props.description]);
  useEffect(() => {
    if (description.length > 30) {
      setDescription(description.slice(0, 30));
    }
  }, [description]);

  const handleEditClient = () => {
    setEditClient(!editClient);
  }
  const handleRemoveClient = () => {
    deleteClient(props.id).then(() => {
      navigate(-1);
    });
    setIsVisible(true);
  }
  const handleCancel = () => {
    props.handleEditClient().then(() => {
      setName(props.name);
      setDescription(props.description);
      handleEditClient();
    });
  }
  const onSubmit = async () => {
    const validate = await validateClientName(name);

    if (!validate.success) {
      setNameError(validate.error);
      return;
    }
    updateClient(props.id, {name, description, notes: props.notes}).then(() => {
      handleEditClient();
    });

  };
  return (
    <div className={styles.container}>
      {editClient ? <>
        <FormField
          fieldName="Client name*"
          type="text"
          placeholder="e.g. Linda Brook"
          value={name}
          setValue={setName}
          isRequired={true}
          errorMessage={nameError}
        />
        <FormField
          fieldName="Short description"
          type="text"
          placeholder="Client suffers from CPTSD"
          value={description}
          setValue={setDescription}
          isRequired={false}
        />
        <div className={styles.editBtns}>
          <FillButton buttonText="Cancel" isWhiteButton onClick={handleCancel}/>
          <FillButton buttonText="Save" onClick={onSubmit}/>
        </div>
      </> : <>
        <h3>{name}</h3>
        <p>{description || 'No description added'}</p>
        <div className={styles.readBtns}>
          <FillButton buttonText="Edit" onClick={handleEditClient}>
            <img src={editClientIcon} alt="editClientIcon"/>
          </FillButton>
          <TextButton style={styles.textBtn} buttonText="Remove client" onClick={() => setIsVisible(true)}/>
        </div>
        <RemoveEntityModal onSubmit={handleRemoveClient}
                           description="Are you sure you want to remove this client? Session history associated with this client will also be removed. This action cannot be undone."
                           title="Remove client"
                           isVisible={isVisible}
                           onClose={() => setIsVisible(false)}/>
      </>}
    </div>
  );
};

export default ClientInfo;
