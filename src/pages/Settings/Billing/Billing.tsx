import React from 'react';
import BillingInfo from './BillingInfo/BillingInfo';
import { Divider } from '../../../components/ui/elements/divider';
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
