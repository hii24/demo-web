import React from 'react';
import styles from './styles.module.scss';
import BillingInfo from './BillingInfo/BillingInfo';
import { Divider } from '../../../UI/Divider';
import BillingHistory from './BillingHistory/BillingHistory';

const BillingTab: React.FC = () => {

  return (
    <div>
      <BillingInfo/>
      <Divider mb="32px" mt="32px"/>
      <BillingHistory/>
    </div>
  );
};

export default BillingTab;
