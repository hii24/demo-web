import React from "react";
import styles from "./styles.module.scss";
import {useShowDisclaimerModal} from '../../hooks/useShowDisclaimerModal';
import DisclaimerModal from '../../components/modals/DisclaimerModal/DisclaimerModal';
import AffirmationsList from './AffirmationsList/AffirmationsList';
import Sidebar from "../../components/general/sidebar/Sidebar";
import HeaderLayout from "../../components/general/header";

const AffirmationsPage: React.FC = () => {
  const {showModal} = useShowDisclaimerModal();

  return (
    <>
      <Sidebar/>
      <HeaderLayout>
        <div className={styles.container}>
          <h3>Select an affirmation to start a session:</h3>
          <AffirmationsList/>
          {showModal && <DisclaimerModal/>}
        </div>
      </HeaderLayout>
    </>
  );
};

export default AffirmationsPage;
