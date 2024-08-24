import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as CheckIcon } from "../../../../assets/vectors/check.svg";
import FillButton from "../../../ui/buttons/fill-button";
import Modal from "../../../modals/Modal";
import ModalHeader from "../../../modals/ModalHeader/ModalHeader";
import styles from "./styles.module.scss";
import Backdrop from "../../../ui/wrappers/backdrop";

const PasswordReset: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Backdrop>
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
    </Backdrop>
  );
};

export default PasswordReset;
