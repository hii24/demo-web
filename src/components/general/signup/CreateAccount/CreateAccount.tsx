import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { registartionUser } from "../../../../api/registration";
import { ReactComponent as LogoIcon } from "../../../../assets/vectors/bigLogo.svg";
import { validationMessage } from "../../../../utils/translations";
import { validateEmail } from "../../../../utils/validation/email-validation";
import {
  containsSpecialChars,
  validateSignUpPassword,
} from "../../../../utils/validation/password-validation";
import BackButton from "../../../ui/buttons/back-button";
import FillButton from "../../../ui/buttons/fill-button";
import CheckText from "../../form-fields/CheckText/CheckText";
import FormField from "../../form-fields/FormField";
import Modal from "../../../modals/Modal";
import ModalHeader from "../../../modals/ModalHeader/ModalHeader";
import styles from "./styles.module.scss";
import Backdrop from "../../../ui/wrappers/backdrop";

const CreateAccount: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordLength, setPasswordLength] = useState<boolean>(false);
  const [passwordSpecial, setPasswordSpecial] = useState<boolean>(false);
  const [inactiveSubmit, setInactiveSubmit] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();

  const validationPassword = async (password: string) => {
    const validate = await validateSignUpPassword(password);
    const isSpecialChars = containsSpecialChars(password);
    setPasswordLength(
      validate.success || validate.error !== validationMessage.passwordTooShort
    );
    setPasswordSpecial(validate.success || isSpecialChars);
  };

  useEffect(() => {
    email && setEmailError("");
    validationPassword(password);
  }, [email, password]);

  const onSubmitForm = async () => {
    const validate = await validateEmail(email);

    if (!validate.success) {
      setEmailError(validate.error);
      return;
    }
    const body = { ...location.state, email, password };

    await setInactiveSubmit(true);
    const response = await registartionUser(body);
    await setInactiveSubmit(false);

    if (response.errorMessage) {
      if (response.statusCode === 409) {
        setEmailError(validationMessage.alreadyRegisteredError);
        return;
      }

      alert(response.errorMessage);
      return;
    }

    navigate("/login");
  };

  return (
    <Backdrop>
      <Modal>
        <div className={styles.container}>
          <ModalHeader
            title="Create an account"
            subTitle="It takes less than 2 minutes"
            isNotIcon={true}
          >
            <LogoIcon />
          </ModalHeader>
          <FormField
            type="text"
            placeholder="Enter your email"
            isRequired={true}
            fieldName="Email*"
            setValue={setEmail}
            value={email}
            errorMessage={emailError}
          />
          <FormField
            type="password"
            placeholder="Create a password"
            isRequired={true}
            fieldName="Password*"
            setValue={setPassword}
            value={password}
          />
          <div className={styles.checkerContainer}>
            <CheckText
              isChecked={passwordLength}
              text="Must be at least 8 characters"
            />
            <CheckText
              isChecked={passwordSpecial}
              text="Must contain one special character"
            />
          </div>
          <FillButton
            buttonText="Continue"
            onClick={onSubmitForm}
            inactive={inactiveSubmit}
          />
          <BackButton
            buttonText="Go back"
            onClick={() => navigate("/chooseRole")}
          />
        </div>
      </Modal>
    </Backdrop>
  );
};

export default CreateAccount;
