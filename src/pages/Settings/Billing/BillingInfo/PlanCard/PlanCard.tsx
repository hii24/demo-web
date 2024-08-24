import React from 'react';
import arrowIcon from '../../../../../assets/vectors/settings/arrow.svg';
import styles from './styles.module.scss';
import ControlSubscriptionModal from '../../../../../components/modals/ControlSubscriptionModal/ControlSubscriptionModal';
import { deleteSubscription } from '../../../../../api/deleteSubscription';
import { useModal } from '../../../../../components/modals/ModalContext';
import authStore, { PAYMENT_OS } from '../../../../../store/store';
import ChoosePlanModal from '../../../../../components/modals/ChoosePlanModal/ChoosePlanModal';
import TextButton from '../../../../../components/ui/buttons/text-button';
import { Divider } from '../../../../../components/ui/elements/divider';
import FillButton from '../../../../../components/ui/buttons/fill-button';


const PlanCard: React.FC = () => {

  const {openModal} = useModal();


  const handleCancel = () => {
    deleteSubscription();
  }
  const isWebSubscription = authStore.paymentOS === PAYMENT_OS.WEB;
  //const isIosSubscription = authStore.paymentOS === PAYMENT_OS.IOS;
  //const isAndroidSubscription = authStore.paymentOS === PAYMENT_OS.ANDROID;

  const handlePlan = () => {
    isWebSubscription ?
      openModal(ChoosePlanModal) :
      openModal(ControlSubscriptionModal);
  };
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.cardInfo}>
          {authStore.premium ?
            <>
              <h4 className={styles.title}>Premium plan<span>{authStore.subscription?.plan.name || ''}</span></h4>
              <p className={styles.subtitle}>Edit your billing information or email.</p>
            </> :
            <>
              <h4 className={styles.title}>Free</h4>
              <p className={styles.subtitle}>No access to premium features</p>
            </>
          }
        </div>
        {authStore.premium && <p className={styles.priceInfo}>

            <span>${authStore.subscription?.plan.price}</span>
            per month
        </p>}
      </div>
      <Divider/>
      <div className={styles.btn}>
        {authStore.premium && isWebSubscription &&
            <TextButton buttonText="Cancel subscription" onClick={handleCancel}/>}
        <FillButton fitContent gap="6px" buttonText={isWebSubscription ? 'Change plan' : 'Manage plan'}
                    onClick={handlePlan} childrenAfter>
          <img src={arrowIcon} alt="arrow"/>
        </FillButton>
      </div>
    </div>
  );
};

export default PlanCard;
