import React from 'react';
import styles from './styles.module.scss';
import { Divider } from '../../../../../UI/Divider';
import FillButton from '../../../../../Buttons/FillButton/FillButton';
import arrowIcon from '../../../../../../assets/vectors/settings/arrow.svg';
import TextButton from '../../../../../Buttons/TextButton/TextButton';
import authStore from '../../../../../../store/store';
import { useModal } from '../../../../../Modal/ModalContext';
import ChoosePlanModal from '../../../../../Modal/ChoosePlanModal/ChoosePlanModal';

const PlanCard: React.FC = () => {

  const { openModal } = useModal();

  const handlePlan = () => {
    openModal(ChoosePlanModal);
  };
  const handleCancel = () => {
    console.log('Cancel subscription');
  }
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.cardInfo}>
          {authStore.premium ?
            <>
              <h4 className={styles.title}>Premium plan<span>{authStore.subscription?.plan.type || ''}</span></h4>
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
        {authStore.premium && <TextButton buttonText="Cancel subscription" onClick={handleCancel}/>}
        <FillButton fitContent gap="6px" buttonText="Change plan" onClick={handlePlan} childrenAfter>
          <img src={arrowIcon} alt="arrow"/>
        </FillButton>
      </div>
    </div>
  );
};

export default PlanCard;
