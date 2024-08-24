import React, { useEffect } from 'react';
import styles from './styles.module.scss';
import visaItem from '../../../../../assets/vectors/settings/visa.svg';
import appleItem from '../../../../../assets/vectors/settings/apple.svg';
import { paymentBillingPanel } from '../../../../../api/paymentBillingPanel';
import { paymentDefaultMethod } from '../../../../../api/paymentDefaultMethod';
import authStore, { PAYMENT_OS } from '../../../../../store/store';
import FillButton from '../../../../../components/ui/buttons/fill-button';
import googlePlayItem from '../../../../../assets/vectors/settings/google_play.svg';


const PaymentMethod: React.FC = () => {
  const [url, setUrl] = React.useState<string>('');
  const [paymentMethod, setPaymentMethod] = React.useState<any>(null);



  useEffect(() => {
    paymentBillingPanel().then(
      (res: any) => {
        setUrl(res.data?.url);
      }
    );
    paymentDefaultMethod().then(
      (res: any) => {
        setPaymentMethod(res.data?.data?.card || null);
      }
    );
  }, []);

  if (!paymentMethod) {
    return null
  }

  const optionCard = [
    {
      type: PAYMENT_OS.WEB,
      title: `Visa ending in ${paymentMethod?.last4}`,
      subtitle: `Expiry ${paymentMethod.exp_month}/${paymentMethod.exp_year}`,
      img: visaItem,
      actionUrl: url,
    },
    {
      type: PAYMENT_OS.IOS,
      title: 'Apple ID',
      subtitle: `temp_IOS@gmail.com`,
      img: appleItem,
      actionUrl: 'https://apps.apple.com/us/app/emdr-tappers/id1511845003',
    },
    {
      type: PAYMENT_OS.ANDROID,
      title: 'Google Play Store',
      subtitle: `temp_ANDROID@gmail.com`,
      img: googlePlayItem,
      actionUrl: 'https://play.google.com/',
    },
  ]

  const currentParams = optionCard.find(item => item.type === authStore.paymentOS)
  const handleClick = () => {
    window.open(currentParams?.actionUrl, '_blank');
  };
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Payment method</h4>
      <p className={styles.subtitle}>Change how you pay for your plan.</p>
      <div className={styles.paymentInfo}>
        <div className={styles.cardInfo}>
          <img src={currentParams?.img} alt="visaItem"/>
          {paymentMethod &&
              <div className={styles.cardDetails}>
                  <div className={styles.paymentInfoItemTitle}><span>{currentParams?.title}</span></div>
                  <div
                      className={styles.paymentInfoItemValue}>{currentParams?.subtitle}</div>
              </div>}
        </div>
        <FillButton fitContent buttonText="Edit" isWhiteButton onClick={handleClick}/>
      </div>
    </div>
  );
};

export default PaymentMethod;
