import React, { useEffect } from 'react';
import styles from './styles.module.scss';
import { TableHistory } from './TableHistory/TableHistory';
import { paymentHistory } from '../../../../api/paymentHistory';
import moment from 'moment/moment';
function transformData(data: any): any {
  return {
    invoice: data.description + ' – ' + moment.unix(data.created_at).format('MMM YYYY'),
    amount: 'USD $' + data.amount.toFixed(2),
    date: moment.unix(data.created_at).format('MMM D, YYYY'),
    status: data.status.charAt(0).toUpperCase() + data.status.slice(1),
    file: 'data.invoice_pdf'
  };
}
const BillingHistory: React.FC = () => {
  const [history, setHistory] = React.useState<any>([]);


  useEffect(() => {
    paymentHistory().then(
      res => {
        setHistory(res.data?.data?.map(
          (item: any) => transformData(item)
        ));
      }
    );
  }, []);
  if (!history?.length) return null;
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Billing history</h4>
      <p className={styles.subtitle}>Access all your previous invoices.</p>
      <TableHistory history={history}/>
    </div>
  );
};

export default BillingHistory;
