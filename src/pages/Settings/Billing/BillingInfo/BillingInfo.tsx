import React from 'react';
import styles from './styles.module.scss';
import PaymentMethod from './PaymentMethod/PaymentMethod';
import PlanCard from './PlanCard/PlanCard';


const BillingInfo: React.FC = () => {

  return (
    <div className={styles.container}>
      <PlanCard/>
      <PaymentMethod/>
    </div>
  );
};

export default BillingInfo;
