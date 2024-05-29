import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as CheckIcon } from "../../../assets/vectors/check.svg";
import FillButton from "../../Buttons/FillButton/FillButton";
import Modal from "../../Modal/Modal";
import ModalHeader from "../../Modal/ModalHeader/ModalHeader";
import styles from "./styles.module.scss";

const PasswordReset: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Modal>
      <div className={styles.container}>
        <ModalHeader
          title="Password reset"
          subTitle="Your password has been successfully reset. Click below to log in magically."
        >
          <CheckIcon />
        </ModalHeader>

        <FillButton buttonText="Continue" onClick={() => navigate("/login")} />
      </div>
    </Modal>
  );
};

export default PasswordReset;
