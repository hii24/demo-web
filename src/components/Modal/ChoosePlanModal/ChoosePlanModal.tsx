import React from 'react';
import FormBackdrop from '../../Backdrop/FormBackdrop/FormBackdrop';
import FillButton from '../../Buttons/FillButton/FillButton';
import styles from './styles.module.scss';
import CrossIcon from '../../../assets/vectors/x-close.svg';
import { PlanList } from './PlanList/PlanList';
import { paymentCreateSubscription } from '../../../api/paymentCreateSubscription';
import { updatedSubscriptionPlan } from '../../../api/updatedSubscriptionPlan';
import { getSubscriptionInvoice } from '../../../api/getSubscriptionInvoice';
import authStore from '../../../store/store';

interface Props {
  closeModal: () => void;
}

const ChoosePlanModal: React.FC<Props> = (props) => {
  const [selectedPlan, setSelectedPlan] = React.useState<string>('monthly');
  const onSubmit = async () => {
    updatedSubscriptionPlan(selectedPlan);
    !authStore.premium && getSubscriptionInvoice().then(
      res => {
        window.open(res.data?.url, '_blank');
      }
    );
  }
  const onSelectedPlan = (plan: string) => {
    setSelectedPlan(plan);
  }

  return (
    <FormBackdrop onClick={props.closeModal}>
      <div
        className={styles.modalContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <div onClick={props.closeModal} className={styles.closeBtn}>
          <img src={CrossIcon} alt="CrossIcon"/>
        </div>
        <h3 className={styles.title}>Choose a preferred plan</h3>
        <PlanList onSelectedPlan={onSelectedPlan}/>
        <p className={styles.description}>Subscription can be cancelled at any time</p>
        <div style={{flex: 1}}/>
        <FillButton style={styles.btn} buttonText="Unlock Premium" onClick={onSubmit}/>
        <div className={styles.info}>
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
        </div>

      </div>
    </FormBackdrop>
  );
};

export default ChoosePlanModal;
