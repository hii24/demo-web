import React, { useEffect } from 'react';
import styles from './styles.module.scss';
import visaItem from '../../../../../../assets/vectors/settings/visa.svg';
import FillButton from '../../../../../Buttons/FillButton/FillButton';
import { paymentDefaultMethod } from '../../../../../../api/paymentDefaultMethod';
import { paymentBillingPanel } from '../../../../../../api/paymentBillingPanel';
import { useModal } from '../../../../../Modal/ModalContext';
import ChoosePlanModal from '../../../../../Modal/ChoosePlanModal/ChoosePlanModal';

const PaymentMethod: React.FC = () => {
  const [url, setUrl] = React.useState<string>('');
  const [paymentMethod, setPaymentMethod] = React.useState<any>({});

  const handleClick = () => {
    window.open(url, '_blank');
  };
  useEffect(() => {
    paymentBillingPanel().then(
      res => {
        setUrl(res.data.url);
      }
    );
    paymentDefaultMethod().then(
      res => {
        setPaymentMethod(res.data.data.card);
      }
    );
  }, []);
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Payment method</h4>
      <p className={styles.subtitle}>Change how you pay for your plan.</p>
      <div className={styles.paymentInfo}>
        <div className={styles.cardInfo}>
          <img src={visaItem} alt="visaItem"/>
          <div className={styles.cardDetails}>
            <div className={styles.paymentInfoItemTitle}><span>Visa ending in {paymentMethod.last4}</span></div>
            <div className={styles.paymentInfoItemValue}>Expiry {paymentMethod.exp_month}/{paymentMethod.exp_year}</div>
          </div>
        </div>
        <FillButton fitContent buttonText="Edit" isWhiteButton onClick={handleClick}/>
      </div>
    </div>
  );
};

export default PaymentMethod;
