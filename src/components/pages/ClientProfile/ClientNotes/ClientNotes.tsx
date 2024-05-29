import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import FillButton from '../../../Buttons/FillButton/FillButton';
import editClientIcon from '../../../../assets/vectors/clients/editClient.svg';
import { updateClient } from '../../../../api/updateClient';
import TextAreaField from '../../../FormField/TextAreaField';

interface Props {
  name: string;
  notes?: string;
  description: string;
  id: number;
  handleEditClient: () => Promise<void>;
}

const ClientNotes: React.FC<Props> = (props) => {
  const [editClient, setEditClient] = useState<boolean>(false);
  const [notes, setNotes] = useState<string>(props.notes || '');


  const handleEditClient = () => {
    setEditClient(!editClient);
  }
  useEffect(() => {
    setNotes(props.notes || '');
  }, [props.notes]);
  useEffect(() => {
    if (notes.length > 500) {
      setNotes(notes.slice(0, 500));
    }
  }, [notes]);

  const handleCancel = () => {
    props.handleEditClient().then(() => {
      setNotes(props.notes || '');
      handleEditClient();
    });
  }
  const onSubmit = async () => {
    updateClient(props.id, {name: props.name, notes, description: props.description}).then(() => {
      handleEditClient();
    });

  };
  return (
    <div className={styles.container}>
      <h4>Notes</h4>
      {editClient ? <>
        <TextAreaField
          placeholder="Client suffers from CPTSD"
          value={notes}
          setValue={setNotes}
          isRequired={false}
        />
        <span className={styles.notesLength}>{notes.length}/500</span>
        <div className={styles.editBtns}>
          <FillButton buttonText="Cancel" isWhiteButton onClick={handleCancel}/>
          <FillButton buttonText="Save" onClick={onSubmit}/>
        </div>
      </> : <>
        <p className={styles.notes}>{notes || 'No notes added'}</p>
        <div className={styles.readBtns}>
          <FillButton buttonText="Edit" onClick={handleEditClient}>
            <img src={editClientIcon} alt="editClientIcon"/>
          </FillButton>

        </div>

      </>}
    </div>
  );
};

export default ClientNotes;
