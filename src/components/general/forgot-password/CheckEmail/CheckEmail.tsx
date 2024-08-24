import React, { useCallback, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { checkCode } from "../../../../api/checkCode";
import { sendSms } from "../../../../api/sendSms";
import { ReactComponent as MailIcon } from "../../../../assets/vectors/mail.svg";
import BackButton from "../../../ui/buttons/back-button";
import FillButton from "../../../ui/buttons/fill-button";
import CodeInput from "../../form-fields/CodeInput/CodeInput";
import Modal from "../../../modals/Modal";
import ModalHeader from "../../../modals/ModalHeader/ModalHeader";
import styles from "./styles.module.scss";
import Backdrop from "../../../ui/wrappers/backdrop";

const CheckEmail: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [inactiveButton, setInactiveButton] = useState<boolean>(false);
  const [code, setCode] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const email = location.state;

  const handleCodeChange = useCallback(async (newCode: string) => {
    console.warn(newCode);
    setError(false);
    if (newCode.length === 4) {
      await setCode(newCode);
    }
  }, []);

  const onSubmitForm = async () => {
    await setInactiveButton(true);
    const response = await checkCode(email, code);
    await setInactiveButton(false);

    if (response.errorMessage) {
      setError(true);
      alert(response.errorMessage);

      return;
    }

    navigate("/newPassword", { state: response.data?.reset_token });
  };

  const navigateToLogin = () => {
    navigate("/login");
  };

  const resendSms = async () => {
    await setInactiveButton(true);
    const response = await sendSms(email);
    await setInactiveButton(false);

    if (response.errorMessage) {
      alert(response.errorMessage);
    }
  };
  const message = `We've sent a code to  ${email}`;

  return (
    <Backdrop>
      <Modal>
        <div className={styles.container}>
          <div className={styles.headerMargin}>
            <ModalHeader title="Check your email" subTitle={message}>
              <MailIcon />
            </ModalHeader>
          </div>
          <div className={styles.inputMargin}>
            <CodeInput onChange={handleCodeChange} isError={error} />
            <div className={styles.resendContainer}>
              <p className={styles.resendText}>Didn’t get a code?</p>
              <button
                className={styles.resendButton}
                onClick={resendSms}
                disabled={inactiveButton}
              >
                Click to resend.
              </button>
            </div>
          </div>
          <div className={styles.verifyButton}>
            <FillButton
              buttonText="Verify"
              onClick={onSubmitForm}
              inactive={inactiveButton}
            />
          </div>
          <BackButton buttonText="Back" onClick={navigateToLogin} />
        </div>
      </Modal>
    </Backdrop>
  );
};

export default CheckEmail;
