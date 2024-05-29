import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as LogoIcon } from "../../../assets/vectors/bigLogo.svg";
import { Role } from "../../../types/role.type";
import BackButton from "../../Buttons/BackButton/BackButton";
import FillButton from "../../Buttons/FillButton/FillButton";
import Modal from "../../Modal/Modal";
import ModalHeader from "../../Modal/ModalHeader/ModalHeader";
import SelectorRadioButton from "./SelectorRadioButton.tsx/SelectorRadioButton";
import styles from "./styles.module.scss";

const ChooseRole: React.FC = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState<Role>(Role.CLIENT);

  const handleRoleChange = (role: Role) => {
    setRole(role);
    console.log(role);
  };

  const confirmRole = () => {
    if (role === Role.THERAPIST) {
      navigate("/therapistAgreement", { state: role });
      return;
    }
    navigate("/createAccount", { state: { user_type: 0 } });
  };

  return (
    <Modal>
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <ModalHeader title="Create an account" isNotIcon={true}>
            <LogoIcon />
          </ModalHeader>
          <p className={styles.headerSubText}>
            How are you planning to use the EMDR Tappers?
          </p>
        </div>
        <div className={styles.selector}>
          <SelectorRadioButton onRoleChange={handleRoleChange} />
        </div>

        <div className={styles.buttons}>
          <FillButton buttonText="Continue" onClick={confirmRole} />
          <BackButton buttonText="Go back" onClick={() => navigate("/login")} />
        </div>
      </div>
    </Modal>
  );
};

export default ChooseRole;
