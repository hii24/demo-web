import React from 'react';
import styles from './styles.module.scss';
import FillButton from '../../../../components/ui/buttons/fill-button';
import TextButton from '../../../../components/ui/buttons/text-button';
import documentIcon from '../../../../assets/vectors/clients/documentIcon.svg';


const FreeSessionItem: React.FC = () => {


  return (

    <div className={styles.container}>
      <div className={styles.details}>
        <div className={styles.info}>
          <div className={styles.baseInfo}>
          </div>
          <div className={styles.durationOne}></div>
          <div className={styles.durationTwo}></div>
        </div>
        <div className={styles.params}>
          <div>
            <p><span>Passes:</span> 50</p>
            <p><span>Sound:</span> Chime</p>
          </div>
          <div>
            <p><span>Color:</span> Green</p>
            <p><span>BG:</span> Mountain</p>
          </div>
        </div>
      </div>
      <div className={styles.btns}>
        <TextButton buttonText="View notes" onClick={() => {
        }}>
          <img style={{opacity: 0.3}} src={documentIcon} alt="documentIcon"/>
        </TextButton>
        <FillButton isWhiteButton buttonText="Load session" onClick={() => {
        }}/>
      </div>
    </div>

  );
};

export default FreeSessionItem;
