import React from 'react';
import FormBackdrop from '../../ui/wrappers/form-backdrop';
import FillButton from '../../ui/buttons/fill-button';
import styles from './styles.module.scss';
import trashIcon from '../../../assets/vectors/clients/trash.svg';


import { ReactComponent as CrossIcon } from '../../../assets/vectors/x-close.svg';

interface Props {
  isVisible: boolean;
  onClose: () => void;
  title: string;
  description: string;
  onSubmit: () => void;
}

const RemoveEntityModal: React.FC<Props> = (props) => {


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
          <img src={trashIcon} alt="trashIcon"/>
          <button onClick={props.onClose} className={styles.button}>
            <CrossIcon/>
          </button>
        </div>
        <h3>{props.title}</h3>
        <p>{props.description}</p>

        <div className={styles.buttonsContainer}>
          <FillButton buttonText="Remove" error onClick={onSubmit}/>
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

export default RemoveEntityModal;
