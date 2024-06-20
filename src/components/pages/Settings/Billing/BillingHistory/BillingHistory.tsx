import React from 'react';
import styles from './styles.module.scss';
import { TableHistory } from './TableHistory/TableHistory';

const BillingHistory: React.FC = () => {

  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Billing history</h4>
      <p className={styles.subtitle}>Access all your previous invoices.</p>
      <TableHistory/>
    </div>
  );
};

export default BillingHistory;
