import React, { useEffect, useState } from 'react';
import FormBackdrop from '../../Backdrop/FormBackdrop/FormBackdrop';
import FillButton from '../../Buttons/FillButton/FillButton';
import FormField from '../../FormField/FormField';
import HeaderModal from './HeaderModal/HeaderModal';
import styles from './styles.module.scss';
import { updateUserEmail } from '../../../api/updateUserEmail';

interface Props {
  isVisible: boolean;
  onClose: () => void;
  email: string;
}

const getErrorMessage = (statusCode: number) => {
  switch (statusCode) {
    case 400:
      return 'Invalid password';
    case 409:
      return 'Incorrect password';
    case 500:
      return ' Access to this account has been temporarily disabled due to many failed login attempts.';
    default:
      return 'Something went wrong';
  }
}
const ConfirmEmailModal: React.FC<Props> = (props) => {
  const [password, setPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');

  const onSubmit = async () => {
    updateUserEmail({email: props.email, password: password}).then(
      (response) => {
        if (response.success) {
          setPassword('');
          setPasswordError('');
          props.onClose();
        } else {
          setPasswordError(getErrorMessage(response.statusCode) || '');
        }
      }
    );
  }
  useEffect(() => {
    setPasswordError('');
    setPassword('');
  }, []);

  if (!props.isVisible) {
    return null;
  }
  return (
    <FormBackdrop onClick={props.onClose}>
      <div
        className={styles.modalContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <HeaderModal
          onClose={props.onClose}
          title="Confirm Email change"
          description="Enter your password below to confirm the changes."
        />
        <div className={styles.subContainer}>
          <div className={styles.formContainer}>
            <div className={styles.descriptionField}>
              <FormField
                fieldName="Password"
                type="password"
                placeholder="••••••••"
                value={password}
                setValue={setPassword}
                isRequired
                errorMessage={passwordError}
              />

            </div>
          </div>
        </div>

        <div className={styles.buttonsContainer}>
          <FillButton buttonText="Submit" onClick={onSubmit}/>
          <FillButton
            buttonText="Cancel"
            onClick={props.onClose}
            isWhiteButton={true}
          />
        </div>
      </div>
      ;
    </FormBackdrop>
  );
};

export default ConfirmEmailModal;
