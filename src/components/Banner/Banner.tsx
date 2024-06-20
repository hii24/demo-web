import React from 'react';
import styles from './styles.module.scss';
import FillButton from '../Buttons/FillButton/FillButton';

const Banner: React.FC = () => {

  return (
    <div className={styles.container}>
      <h2>Premium feature</h2>
      <p>Get full access to this and many others features by upgrading your plan to <span>Premium</span></p>
      <FillButton style={styles.button} buttonText="Unlock Premium" onClick={() => alert('ok')} isWhiteButton/>
    </div>
  );
};

export default Banner;
