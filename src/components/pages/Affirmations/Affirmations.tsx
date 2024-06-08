import React from "react";
import styles from "./styles.module.scss";
import { useShowDisclaimerModal } from '../../../hooks/useShowDisclaimerModal';
import DisclaimerModal from '../../Modal/DisclaimerModal/DisclaimerModal';
import AffirmationsList from './AffirmationsList/AffirmationsList';

const AffirmationsPage: React.FC = () => {
  const { showModal } = useShowDisclaimerModal();

  return (
    <div className={styles.container}>
      <h3>Select an affirmation to start a session:</h3>
      <AffirmationsList/>
      {showModal && <DisclaimerModal/>}
    </div>
  );
};

export default AffirmationsPage;
