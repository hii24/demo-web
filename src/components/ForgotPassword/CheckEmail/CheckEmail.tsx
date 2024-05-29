import React, { useCallback, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { checkCode } from "../../../api/checkCode";
import { sendSms } from "../../../api/sendSms";
import { ReactComponent as MailIcon } from "../../../assets/vectors/mail.svg";
import BackButton from "../../Buttons/BackButton/BackButton";
import FillButton from "../../Buttons/FillButton/FillButton";
import CodeInput from "../../FormField/CodeInput/CodeInput";
import Modal from "../../Modal/Modal";
import ModalHeader from "../../Modal/ModalHeader/ModalHeader";
import styles from "./styles.module.scss";

const CheckEmail: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [inactiveButton, setInactiveButton] = useState<boolean>(false);
  const [code, setCode] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const email = location.state;

  const handleCodeChange = useCallback(async (newCode: string) => {
    console.log(newCode);
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

    console.log(response);

    navigate("/newPassword", { state: response.data?.reset_token });
  };

  const navigateToLogin = () => {
    navigate("/login");
  };

  const resendSms = async () => {
    await setInactiveButton(true);
    const response = await sendSms(email);
    await setInactiveButton(false);

    console.log(response);

    if (response.errorMessage) {
      alert(response.errorMessage);
    }
  };
  const message = `We've sent a code to  ${email}`;

  return (
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
  );
};

export default CheckEmail;
