import React, { useState } from "react";
import { ReactComponent as AddUserIcon } from "../../../assets/vectors/addUser.svg";
import { ReactComponent as UsersListIcon } from "../../../assets/vectors/list.svg";
import AddClientModal from "../../Modal/AddClientModal/AddClientModal";
import ClientButton from "./ClientButton/ClientButton";
import StartEMDRButton from "./StartEMDRButton/StartEMDRButton";
import styles from "./styles.module.scss";

const TherapistButtonBlock: React.FC = () => {
  const [isVisibleModal, setIsVisibleModal] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <StartEMDRButton onClick={() => console.log("start session")} />
      <div className={styles.userButtons}>
        <ClientButton
          title="Add client"
          onClick={() => setIsVisibleModal(true)}
        >
          <AddUserIcon />
        </ClientButton>
        <ClientButton
          title="View clients"
          onClick={() => console.log("Users list")}
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
