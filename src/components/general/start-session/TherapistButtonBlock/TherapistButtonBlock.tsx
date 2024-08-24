import React, { useState } from "react";
import { ReactComponent as AddUserIcon } from "../../../../assets/vectors/addUser.svg";
import { ReactComponent as UsersListIcon } from "../../../../assets/vectors/list.svg";
import AddClientModal from "../../../modals/AddClientModal/AddClientModal";
import ClientButton from "./ClientButton/ClientButton";
import StartEMDRButton from "./StartEMDRButton/StartEMDRButton";
import styles from "./styles.module.scss";
import {useNavigate} from "react-router-dom";
import {ActiveSessionStore} from "../../../../store/active-session-store";

const TherapistButtonBlock: React.FC = () => {
  const [isVisibleModal, setIsVisibleModal] = useState<boolean>(false);
  const navigate = useNavigate();

  const startSessionHandler = async () => {
    const sessionId = await ActiveSessionStore.createSession()

    if (sessionId) {
      navigate("/session?id=" + sessionId )
    }
  }

  return (
    <div className={styles.container}>
      <StartEMDRButton onClick={startSessionHandler} />
      <div className={styles.userButtons}>
        <ClientButton
          title="Add client"
          onClick={() => setIsVisibleModal(true)}
        >
          <AddUserIcon />
        </ClientButton>
        <ClientButton
          title="View clients"
          onClick={() => {}}
        >
          <UsersListIcon />
        </ClientButton>
      </div>
      <AddClientModal
        isVisible={isVisibleModal}
        onClose={() => setIsVisibleModal(false)}
      />
    </div>
  );
};

export default TherapistButtonBlock;
