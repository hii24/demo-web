import styles from './styles.module.scss';
import React from 'react';

interface Props {
  color?: string;
  mb?: string;
  mt?: string;

}

export const Divider: React.FC<Props> = (props) => {
  return <div className={styles.divider}
              style={{background: props.color || '#EAECF0', marginTop: props.mt || 0, marginBottom: props.mb || 0}}/>;
}

