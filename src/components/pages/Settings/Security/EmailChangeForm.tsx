import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import FormField from '../../../FormField/FormField';
import FillButton from '../../../Buttons/FillButton/FillButton';
import { Divider } from '../../../UI/Divider';
import ConfirmEmailModal from '../../../Modal/ConfirmEmailModal/ConfirmEmailModal';
import mailIcon from '../../../../assets/vectors/settings/mail.svg';
import { validateEmail } from '../../../../utils/validation/email-validation';
import authStore from '../../../../store/store';


export const EmailChangeForm: React.FC = () => {
  const [email, setEmail] = useState(authStore.user?.email || '');
  const [isVisible, setIsVisible] = useState(false);
  const [emailError, setEmailError] = useState('');
  const handleUpdateEmail = async () => {
    const validation = await validateEmail(email);
    if (!validation.success) {
      setEmailError(validation.error);
      return;
    }
    if (email === authStore.user?.email) {
      setEmailError('Email is the same as the current email');
      return;
    }
    setEmailError('');
    setIsVisible(true)
  }
  useEffect(() => {
    if (!authStore.user?.passwordSet) {
     setEmailError('Please set your password before changing your email.')
    }
  }, []);


  return (
    <>
      <h4 className={styles.title}>Change Email</h4>
      <p className={styles.subtitle}>Enter your new email below if you would like to change it.</p>
      <FormField
        startIcon={mailIcon}
        type="text"
        placeholder="olivia@untitledui.com"
        fieldName="Email address"
        setValue={setEmail}
        value={email}
        isRequired
        errorMessage={emailError}
        disabled={!authStore.user?.passwordSet}
      />
      <Divider mb="16px" mt="32px"/>
      <div className={styles.btnWrapper}>
        <FillButton fitContent buttonText="Update email" onClick={handleUpdateEmail}/>
      </div>
      <ConfirmEmailModal isVisible={isVisible} onClose={() => setIsVisible(false)} email={email}/>
    </>
  );
};
