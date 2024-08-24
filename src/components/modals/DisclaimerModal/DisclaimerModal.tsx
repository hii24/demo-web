import React from 'react';
import FormBackdrop from '../../ui/wrappers/form-backdrop';
import FillButton from '../../ui/buttons/fill-button';
import styles from './styles.module.scss';
import disclaimerIcon from '../../../assets/vectors/resourcing/disclaimer.svg';
import { useNavigate } from 'react-router-dom';
import { useShowDisclaimerModal } from '../../../hooks/useShowDisclaimerModal';

interface Props {
}

const DisclaimerModal: React.FC<Props> = (props) => {
  const navigate = useNavigate();
  const {showModal, setShowModal} = useShowDisclaimerModal();


  const onSubmit = async () => {
    localStorage.setItem('disclaimer', 'true');
    setShowModal(false);
  };
  if (!showModal) {
    return null;
  }

  return (
    <FormBackdrop onClick={() => {
    }}>
      <div
        className={styles.modalContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.header}>
          <img src={disclaimerIcon} alt="disclaimerIcon"/>
        </div>
        <h3>Disclaimer</h3>
        <p>Guided sessions are powerful tools and should be used under the direction of a trained therapist. By pressing
          continue, you certify that you either possess the training of a therapist or you are using EMDR Tappers with
          the direction of a trained therapist.</p>

        <div className={styles.buttonsContainer}>
          <FillButton buttonText="Continue" onClick={onSubmit}/>
          <FillButton
            buttonText="Go back"
            onClick={() => navigate(-1)}
            isWhiteButton={true}
          />
        </div>
      </div>
      ;
    </FormBackdrop>
  );
};

export default DisclaimerModal;
