import React from 'react';
import styles from './styles.module.scss';
import { TableHeader } from './TableHeader/TableHeader';
import { TableRow } from './TableRow/TableRow';

interface IProps {
  history: any;

}

export const TableHistory: React.FC<IProps> = ({history}) => {

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <TableHeader/>
        {
          history?.map((item:any, index:any) => (
            <TableRow key={index} {...item}/>
          ))
        }
      </div>
    </div>
  );
}
