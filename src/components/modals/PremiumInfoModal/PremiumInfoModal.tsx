import React from 'react';
import FormBackdrop from '../../ui/wrappers/form-backdrop';
import FillButton from '../../ui/buttons/fill-button';
import styles from './styles.module.scss';
import CrossIcon from '../../../assets/vectors/x-close.svg';
import ArrowRightIcon from '../../../assets/vectors/settings/arrowRight.svg';
import BigLogo from '../../../assets/vectors/bigLogo.svg';
import Rating from '../../../assets/vectors/settings/rating.svg';
import PremiumOne from '../../../assets/vectors/settings/prem-1.svg';
import PremiumTwo from '../../../assets/vectors/settings/prem-2.svg';
import PremiumThee from '../../../assets/vectors/settings/prem-3.svg';
import authStore from '../../../store/store';
import { useModal } from '../ModalContext';
import ChoosePlanModal from '../ChoosePlanModal/ChoosePlanModal';

interface Props {
  closeModal: () => void;
}


const THERAPIST_INFO = [
  {
    title: 'Full Bilateral customization',
    subtitle: 'Gain full control over your client\'s Visual, Auditory and Tactile settings.',
    icon: PremiumOne
  },
  {
    title: 'Sessions history',
    subtitle: 'Keep log of past sessions and apply previously used settings.',
    icon: PremiumTwo
  },
  {
    title: 'Clients management',
    subtitle: 'Manage your clients, leave notes and track progress.',
    icon: PremiumThee
  }
]
const CLIENT_INFO = [
  {
    title: 'Full Bilateral customization',
    subtitle: 'Gain full control over the Visual, Auditory and Tactile settings.',
    icon: PremiumOne
  },
  {
    title: 'Sessions history',
    subtitle: 'Keep log of past sessions and apply previously used settings.',
    icon: PremiumTwo
  },
  {
    title: 'Resources access',
    subtitle: 'Full access to Guided Sessions, Resourcing, and Affirmations.',
    icon: PremiumThee
  }
]
const PremiumInfoModal: React.FC<Props> = (props) => {
  const info = authStore.isClient ? CLIENT_INFO : THERAPIST_INFO;
  /*
    const onSubmit = async () => {

   }
   */
  const { openModal } = useModal();

  const handleOpenNextModal = () => {
    props.closeModal();
    openModal(ChoosePlanModal);
  };

  return (
    <FormBackdrop onClick={props.closeModal}>
      <div
        className={styles.modalContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <div onClick={props.closeModal} className={styles.closeBtn}>
          <img src={CrossIcon} alt="CrossIcon"/>
        </div>
        <img height={90} src={BigLogo} alt="BigLogo"/>
        <h3 className={styles.title}>EMDR Tappers</h3>
        <img src={Rating} alt="Rating"/>
        <p className={styles.subtitle}>#1 EMDR app on the App Store</p>
        <div className={styles.detailsList}>
          {info.map((item, index) => (
            <DetailItem key={index} icon={item.icon} title={item.title} subtitle={item.subtitle}/>
          ))}
        </div>
        <FillButton gap="10px" buttonText="Continue" onClick={handleOpenNextModal} childrenAfter>
          <img src={ArrowRightIcon} alt="ArrowRightIcon"/>
        </FillButton>

      </div>
      ;
    </FormBackdrop>
  );
};

interface DetailItemProps {
  icon: string;
  title: string;
  subtitle: string;
}

const DetailItem: React.FC<DetailItemProps> = (props) => {
  return (
    <div className={styles.detailItem}>
      <div className={styles.detailItemIcon}>
        <img src={props.icon} alt="icon"/>
        <p className={styles.detailItemTitle}>{props.title}</p>
      </div>
      <div className={styles.detailItemText}>
        {props.subtitle}
      </div>
    </div>
  );
}
export default PremiumInfoModal;
