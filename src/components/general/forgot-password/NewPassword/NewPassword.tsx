import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { resetPassword } from "../../../../api/resetPassword";
import { ReactComponent as LockIcon } from "../../../../assets/vectors/lock.svg";
import { validationMessage } from "../../../../utils/translations";
import {
  containsSpecialChars,
  validateSignUpPassword,
} from "../../../../utils/validation/password-validation";
import FillButton from "../../../ui/buttons/fill-button";
import CheckText from "../../form-fields/CheckText/CheckText";
import FormField from "../../form-fields/FormField";
import Modal from "../../../modals/Modal";
import ModalHeader from "../../../modals/ModalHeader/ModalHeader";
import styles from "./styles.module.scss";
import Backdrop from "../../../ui/wrappers/backdrop";

const NewPassword: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [password, setPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [confirmPasswordError, setConfirmPasswordError] = useState<string>("");
  const [passwordLength, setPasswordLength] = useState<boolean>(false);
  const [passwordSpecial, setPasswordSpecial] = useState<boolean>(false);
  const [inactiveButton, setInactiveButton] = useState<boolean>(false);

  const reset_token = location.state;

  const validationPassword = async (password: string) => {
    const validate = await validateSignUpPassword(password);
    const isSpecialChars = containsSpecialChars(password);
    setPasswordLength(
      validate.success || validate.error !== validationMessage.passwordTooShort
    );
    setPasswordSpecial(validate.success || isSpecialChars);
  };

  useEffect(() => {
    password && setPasswordError("");
    confirmPassword && setConfirmPasswordError("");
    validationPassword(password);
  }, [password, confirmPassword]);

  const onSubmitForm = async () => {
    if (password !== confirmPassword) {
      setPasswordError(validationMessage.passwordShouldBeSame);
      setConfirmPasswordError(validationMessage.passwordShouldBeSame);
      return;
    }

    await setInactiveButton(true);
    const response = await resetPassword(password, reset_token);
    await setInactiveButton(false);

    if (response.errorMessage) {
      alert(response.errorMessage);
      return;
    }

    navigate("/passwordReset");
  };

  return (
    <Backdrop>
      <Modal>
        <div className={styles.container}>
          <ModalHeader
            title="Set new password"
            subTitle="Your new password must be different to previously used passwords."
          >
            <LockIcon />
          </ModalHeader>
          <div className={styles.inputContainer}>
            <FormField
              type="password"
              placeholder="••••••••"
              fieldName="Password"
              setValue={setPassword}
              value={password}
              isRequired={true}
              errorMessage={passwordError}
            />
            <FormField
              type="password"
              placeholder="••••••••"
              fieldName="Confirm Password"
              setValue={setConfirmPassword}
              value={confirmPassword}
              isRequired={true}
              errorMessage={confirmPasswordError}
            />
          </div>
          <div className={styles.checkContainer}>
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
            buttonText="Reset password"
            onClick={onSubmitForm}
            inactive={inactiveButton}
          />
        </div>
      </Modal>
    </Backdrop>
  );
};

export default NewPassword;
