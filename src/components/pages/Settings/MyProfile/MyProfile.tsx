import React, { useState } from 'react';
import styles from './styles.module.scss';
import FormField from '../../../FormField/FormField';
import FillButton from '../../../Buttons/FillButton/FillButton';
import { Divider } from '../../../UI/Divider';
import trashIcon from '../../../../assets/vectors/trash.svg';
import RemoveAccountModal from '../../../Modal/RemoveAccountModal/RemoveAccountModal';
import authStore from '../../../../store/store';
import { updateUser } from '../../../../api/updateUser';
import { deleteAccount } from '../../../../api/deleteAccount';
import { validateFirstName, validateLastName } from '../../../../utils/validation/user-validation';


const MyProfileTab: React.FC = () => {
  const [name, setName] = React.useState(authStore.userInfo?.first_name || '');
  const [lastName, setLastName] = React.useState(authStore.userInfo?.last_name || '');
  const [isVisible, setIsVisible] = React.useState(false);
  const [errors, setErrors] = useState({ first_name: '', last_name: '' });

  const saveChanges = async () => {
    const firstNameValidationResult = await validateFirstName(name);
    const lastNameValidationResult = await validateLastName(lastName);

    if (firstNameValidationResult.success && lastNameValidationResult.success) {
      setErrors({ first_name: '', last_name: '' });
      updateUser({ first_name: name, last_name: lastName });
    } else {
      setErrors({
        first_name: firstNameValidationResult.success ? '' : firstNameValidationResult.error,
        last_name: lastNameValidationResult.success ? '' : lastNameValidationResult.error
      });
    }
  };
  const handleDeleteAccount = () => {
    deleteAccount();
  }
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Personal information</h4>
      <p className={styles.subtitle}>Edit your personal information or email.</p>
      <div className={styles.form}>
        <FormField
          type="text"
          placeholder="Olivia"
          fieldName="First name"
          setValue={setName}
          value={name}
          isRequired
          errorMessage={errors.first_name}
        />
        <FormField
          type="text"
          placeholder="Rhye"
          fieldName="Last name"
          setValue={setLastName}
          value={lastName}
          isRequired
          errorMessage={errors.last_name}
        />
      </div>
      <FillButton fitContent buttonText="Save changes" onClick={saveChanges}/>
      <Divider mb="32px" mt="32px"/>
      <FillButton gap="6px" fitContent isWhiteButton buttonText="Delete account" onClick={() => setIsVisible(true)}>
        <img src={trashIcon} alt="Delete account"/>
      </FillButton>
      <RemoveAccountModal isVisible={isVisible} onClose={() => setIsVisible(false)} onSubmit={handleDeleteAccount}/>
    </div>
  );
};

export default MyProfileTab;
