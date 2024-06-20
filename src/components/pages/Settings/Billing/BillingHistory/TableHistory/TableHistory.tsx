import React, { useEffect } from 'react';
import styles from './styles.module.scss';
import { TableHeader } from './TableHeader/TableHeader';
import { TableRow } from './TableRow/TableRow';
import { paymentHistory } from '../../../../../../api/paymentHistory';
import moment from 'moment';

function transformData(data: any): any {
  return {
    invoice: data.description + ' – ' + moment.unix(data.created_at).format('MMM YYYY'),
    amount: 'USD $' + data.amount.toFixed(2),
    date: moment.unix(data.created_at).format('MMM D, YYYY'),
    status: data.status.charAt(0).toUpperCase() + data.status.slice(1),
    file: 'data.invoice_pdf'
  };
}
export const TableHistory: React.FC = () => {
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
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <TableHeader/>
        {
          history.map((item:any, index:any) => (
            <TableRow key={index} {...item}/>
          ))
        }
      </div>
    </div>
  );
}
