import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import FillButton from '../../../../Buttons/FillButton/FillButton';
import editClientIcon from '../../../../../assets/vectors/clients/editClient.svg';
import TextAreaField from '../../../../FormField/TextAreaField';
import { updateClientSession } from '../../../../../api/updateClientSession';
import RemoveEntityModal from '../../../../Modal/RemoveEntityModal/RemoveEntityModal';
import { deleteClient } from '../../../../../api/deleteClient';
import { useNavigate } from 'react-router-dom';
import { deleteClientSession } from '../../../../../api/deleteClientSession';
import TextButton from '../../../../Buttons/TextButton/TextButton';
import smallTrashIcon from '../../../../../assets/vectors/clients/smallTrash.svg';

interface Props {
  notes?: string;
  id: string;
  handleSessionEdit: () => Promise<void>;
}

const ClientSessionNotes: React.FC<Props> = (props) => {
  const navigate = useNavigate();
  const [editClient, setEditClient] = useState<boolean>(false);
  const [notes, setNotes] = useState<string>(props.notes || '');

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const handleRemoveSession = () => {
    deleteClientSession(props.id).then(() => {
      navigate(-1);
    });
    setIsVisible(true);
  }
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
    props.handleSessionEdit().then(() => {
      setNotes(props.notes || '');
      handleEditClient();
    });
  }
  const onSubmit = async () => {
    updateClientSession(props.id, {notes}).then(() => {
      console.log('notes updated')
      props.handleSessionEdit().then(() => {
        handleEditClient();
      });

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
          <TextButton buttonText='Delete session' onClick={()=>setIsVisible(true)}>
            <img src={smallTrashIcon} alt="smallTrashIcon"/>
          </TextButton>
        </div>

      </>}
      <RemoveEntityModal onSubmit={handleRemoveSession}
                         description="Are you sure you want to delete this session? This action cannot be undone."
                         title="Delete session"
                         isVisible={isVisible}
                         onClose={() => setIsVisible(false)}/>
    </div>
  );
};

export default ClientSessionNotes;
