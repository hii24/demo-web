import React from 'react';
import styles from './styles.module.scss';
import downloadIcon from '../../../../../../assets/vectors/settings/download.svg';
import checkIcon from '../../../../../../assets/vectors/settings/check.svg';

interface TableRowProps {
  invoice: string;
  amount: string;
  date: string;
  status: string;
  file: string;
}

const getStatusParams = (status: string) => {
  switch (status) {
    case 'Paid':
      return {
        color: '#067647',
        background: '#ECFDF3',
        border: '#ABEFC6',
        icon: checkIcon
      }
    case 'Unpaid':
      return {
        color: '#067647',
        background: '#ECFDF3',
        border: '#ABEFC6',
        icon: checkIcon
      }
    case 'Overdue':
      return {
        color: '#067647',
        background: '#ECFDF3',
        border: '#ABEFC6',
        icon: checkIcon
      }
    default:
      return {
        color: '#067647',
        background: '#ECFDF3',
        border: '#ABEFC6',
        icon: checkIcon
      }
  }

}
export const TableRow: React.FC<TableRowProps> = (props) => {
  const handleDownload = () => {
    alert('Download')
  }

  const statusBox = () => {
    const {color, background, border, icon} = getStatusParams(props.status);
    return (
      <div className={styles.statusBox} style={{
        color: color,
        background: background,
        borderColor: border
      }}>
        <img height={12} width={12} src={icon} alt="status"/>
        <div className={styles.statusText}>{props.status}</div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <p className={styles.invoice}>{props.invoice}</p>
      <p className={styles.amount}>{props.amount}</p>
      <p className={styles.date}>{props.date}</p>
      <div className={styles.status}>
        {statusBox()}
      </div>
      <div className={styles.file} onClick={handleDownload}>
        <img src={downloadIcon} alt="file"/>
      </div>
    </div>
  );
}
