import React from 'react';
import styles from './styles.module.scss';
import FillButton from '../../ui/buttons/fill-button';
import { useModal } from '../../modals/ModalContext';
import PremiumInfoModal from '../../modals/PremiumInfoModal/PremiumInfoModal';

const Banner: React.FC = () => {

  const { openModal } = useModal();

  const handleOpenModal = () => {
    openModal(PremiumInfoModal);
  };
  return (
    <div className={styles.container}>
      <h2>Premium feature</h2>
      <p>Get full access to this and many others features by upgrading your plan to <span>Premium</span></p>
      <FillButton style={styles.button} buttonText="Unlock Premium" onClick={handleOpenModal} isWhiteButton/>
    </div>
  );
};

export default Banner;
