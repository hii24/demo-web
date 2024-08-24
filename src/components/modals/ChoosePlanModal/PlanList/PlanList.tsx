import React from 'react';
import styles from './styles.module.scss';

interface PlanListProps {
  onSelectedPlan: (plan: string) => void;
}

const planParamsList = [
  {
    title: 'Monthly',
    price: '$9.99/month',
    priceByMonth: '',
    discount: '',
    type: 'Billed monthly',
  },
  {
    title: 'Yearly',
    price: '$99/year',
    priceByMonth: '$7.99/month',
    discount: 'Save 20%',
    type: 'Billed anually',
  },
  {
    title: 'Lifetime',
    price: '$199',
    priceByMonth: '',
    discount: '',
    type: 'One-time purchase',
  }
];

interface PlanItemProps {
  plan: {
    title: string;
    price: string;
    priceByMonth: string;
    discount: string;
    type: string;
  };
  isActive: boolean;
  onPlanClick: () => void;
}

const PlanItem: React.FC<PlanItemProps> = ({plan, isActive, onPlanClick}) => {
  return (
    <div className={`${styles.plan} ${isActive ? styles.isActive : ''}`} onClick={onPlanClick}>
      <div className={styles.left}>
        <h2 className={styles.title}>{plan.title} {plan.discount &&
            <p className={styles.discount}>{plan.discount}</p>}</h2>
        {plan.priceByMonth && <p className={styles.priceByMonth}>{plan.priceByMonth}</p>}
        <p className={styles.price}>{plan.price}</p>
      </div>
      <div className={styles.right}>
        <div className={styles.checkbox}/>
        <p className={styles.type}>{plan.type}</p>
      </div>
    </div>
  );
};

export const PlanList: React.FC<PlanListProps> = ({onSelectedPlan}) => {
  const [activePlan, setActivePlan] = React.useState(0);
  const handlePlanClick = (index: number) => {
    setActivePlan(index);
    switch (index) {
      case 0:
        onSelectedPlan('monthly');
        return;
      case 1:
        onSelectedPlan('yearly');
        return;
      case 2:
        onSelectedPlan('lifetime');
        return;
      default:
        return;

    }
  }

  return (
    <div className={styles.planList}>
      {planParamsList.map((plan, index) => (
        <PlanItem key={Math.random()} plan={plan} isActive={index === activePlan} onPlanClick={() => handlePlanClick(index)}/>
      ))}
    </div>
  );
};
