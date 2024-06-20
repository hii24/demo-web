import React from 'react';
import styles from './styles.module.scss';
import { EmailChangeForm } from './EmailChangeForm';
import { PasswordChangeForm } from './PasswordChangeForm';

const SecurityTab: React.FC = () => {
  return (
    <div className={styles.container}>
      <EmailChangeForm />
      <PasswordChangeForm />
    </div>
  );
};

export default SecurityTab;
