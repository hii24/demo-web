import React, { useState } from 'react';
import styles from './styles.module.scss';
import FormField from '../../../components/general/form-fields/FormField';
import FillButton from '../../../components/ui/buttons/fill-button';
import { Divider } from '../../../components/ui/elements/divider';
import authStore from '../../../store/store';
import { updateUserPassword } from '../../../api/updateUserPassword';
import {
  validateConfirmPassword,
  validateNewPassword,
  validatePassword
} from '../../../utils/validation/change-password-validation';
import { createUserPassword } from '../../../api/createUserPassword';

const InfoForm = [
  {
    title: 'Change Password',
    subtitle: 'Please enter your current password to change your password.',
  },
  {
    title: 'Set Password',
    subtitle: 'Add a password to your account for additional security.',
  }
]
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
export const PasswordChangeForm: React.FC = () => {
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState({password: '', newPassword: '', confirmPassword: ''});
  const handlePasswordChange = async () => {
    const validationPassword = await validatePassword(password);
    const validationNewPassword = await validateNewPassword(newPassword);
    const validationConfirmPassword = await validateConfirmPassword(confirmPassword, newPassword);

    if (!validationPassword.success && authStore.user?.passwordSet) {
      setError({password: validationPassword.error, newPassword: '', confirmPassword: ''});
      return;
    }
    if (!validationNewPassword.success) {
      setError({password: '', newPassword: validationNewPassword.error, confirmPassword: ''});
      return;
    }
    if (!validationConfirmPassword.success) {
      setError({password: '', newPassword: '', confirmPassword: validationConfirmPassword.error});
      return;
    }

    if (password === newPassword) {
      setError({
        password: 'New password should not be the same as the current password',
        newPassword: '',
        confirmPassword: ''
      });
      return;
    }
    if (newPassword !== confirmPassword) {
      setError({
        password: '',
        newPassword: '',
        confirmPassword: 'Passwords do not match'
      });
      return;
    }
    !authStore.user?.passwordSet && createUserPassword({password: newPassword}).then(
      (response) => {
        if (response.success) {
          setPassword('');
          setNewPassword('');
          setConfirmPassword('');
        } else {
          setError({password: getErrorMessage(response.statusCode) || '', newPassword: '', confirmPassword: ''});
        }
      }
    );
    authStore.user?.passwordSet && updateUserPassword({old_password: password, password: newPassword}).then(
      (response) => {
        if (response.success) {
          setPassword('');
          setNewPassword('');
          setConfirmPassword('');
        } else {
          setError({password: getErrorMessage(response.statusCode) || '', newPassword: '', confirmPassword: ''});

        }
      }
    );
  }

  const info = authStore.user?.passwordSet ? InfoForm[0] : InfoForm[1]
  return (
    <>
      <h4 className={styles.title}>{info.title}</h4>
      <p className={styles.subtitle}>{info.subtitle}</p>
      {authStore.user?.passwordSet && <FormField
          fieldName="Current password"
          type="password"
          placeholder="••••••••"
          value={password}
          setValue={setPassword}
          isRequired
          errorMessage={error.password}
      />}
      <FormField
        fieldName="New password"
        type="password"
        placeholder="••••••••"
        value={newPassword}
        setValue={setNewPassword}
        errorMessage={error.newPassword}
        isRequired
        mt="20px"
      />
      <FormField
        fieldName="Confirm new password"
        type="password"
        placeholder="••••••••"
        value={confirmPassword}
        errorMessage={error.confirmPassword}
        setValue={setConfirmPassword}
        isRequired
        mt="20px"
      />
      <Divider mb="16px" mt="32px"/>
      <div className={styles.btnWrapper}>
        <FillButton fitContent buttonText="Update password" onClick={handlePasswordChange}/>
      </div>
    </>
  );
};
