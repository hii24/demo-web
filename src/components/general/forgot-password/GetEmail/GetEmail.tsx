import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendSms } from "../../../../api/sendSms";
import { ReactComponent as KeyIcon } from "../../../../assets/vectors/key.svg";
import { validateEmail } from "../../../../utils/validation/email-validation";
import BackButton from "../../../ui/buttons/back-button";
import FillButton from "../../../ui/buttons/fill-button";
import FormField from "../../form-fields/FormField";
import Modal from "../../../modals/Modal";
import ModalHeader from "../../../modals/ModalHeader/ModalHeader";
import styles from "./styles.module.scss";
import Backdrop from "../../../ui/wrappers/backdrop";

const GetEmail: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [inactieButton, setInactieButton] = useState<boolean>(false);

  useEffect(() => {
    email && setEmailError("");
  }, [email]);

  const onSubmitForm = async () => {
    const validation = await validateEmail(email);
    if (!validation.success) {
      setEmailError(validation.error);
      return;
    }
    await setInactieButton(true);
    const response = await sendSms(email);
    await setInactieButton(false);

    if (response.errorMessage) {
      alert(response.errorMessage);
      return;
    }
    navigate("/checkEmail", { state: email });
  };

  const navigateToLogin = () => {
    navigate("/login");
  };

  return (
    <Backdrop>
      <Modal>
        <div className={styles.container}>
          <div className={styles.headerMargin}>
            <ModalHeader
              title="Forgot password?"
              subTitle="No worries, we’ll send you reset instructions"
            >
              <KeyIcon />
            </ModalHeader>
          </div>
          <div className={styles.inputMargin}>
            <FormField
              type="text"
              placeholder="Enter your email"
              isRequired={true}
              fieldName="Email"
              setValue={setEmail}
              value={email}
              errorMessage={emailError}
            />
          </div>
          <div className={styles.inputMargin}>
            <FillButton
              buttonText="Reset password"
              onClick={onSubmitForm}
              inactive={inactieButton}
            />
          </div>
          <BackButton buttonText="Back to log in" onClick={navigateToLogin} />
        </div>
      </Modal>
    </Backdrop>
  );
};

export default GetEmail;
