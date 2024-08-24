import React from 'react';
import FormBackdrop from '../../ui/wrappers/form-backdrop';
import FillButton from '../../ui/buttons/fill-button';
import styles from './styles.module.scss';
import deleteIcon from '../../../assets/vectors/settings/attention.svg';


import { ReactComponent as CrossIcon } from '../../../assets/vectors/x-close.svg';

interface Props {
  isVisible: boolean;
  onClose: () => void;
  onSubmit: () => void;
}

const RemoveAccountModal: React.FC<Props> = (props) => {


  const onSubmit = async () => {
    props.onSubmit();
    props.onClose();
  };

  if (!props.isVisible) {
    return null;
  }

  return (
    <FormBackdrop onClick={props.onClose}>
      <div
        className={styles.modalContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.header}>
          <img src={deleteIcon} alt="deleteIcon"/>
          <button onClick={props.onClose} className={styles.button}>
            <CrossIcon/>
          </button>
        </div>
        <h3>Delete account?</h3>
        <p>Are you sure you want to delete your account? All your data will be permanently deleted. This action cannot
          be undone.</p>

        <div className={styles.buttonsContainer}>
          <FillButton buttonText="Delete" error onClick={onSubmit}/>
          <FillButton
            buttonText="Cancel"
            onClick={props.onClose}
            isWhiteButton={true}
          />
        </div>
      </div>
      ;
    </FormBackdrop>
  );
};

export default RemoveAccountModal;
