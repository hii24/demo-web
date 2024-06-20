import React from 'react';
import styles from './styles.module.scss';

export const TableHeader: React.FC = () => {

  return (
    <div className={styles.container}>
      <p className={styles.invoice}>Invoice</p>
      <p className={styles.amount}>Amount</p>
      <p className={styles.date}>Date</p>
      <p className={styles.status}>Status</p>
      <p className={styles.file}></p>
    </div>
  );
}
