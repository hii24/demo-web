import React from 'react';
import FormBackdrop from '../../ui/wrappers/form-backdrop';
import styles from './styles.module.scss';
import controlSub from '../../../assets/vectors/settings/controlSub.svg';
import { ReactComponent as AppStoreIcon } from '../../../assets/vectors/settings/appStore.svg';
import { ReactComponent as GooglePlayIcon } from '../../../assets/vectors/settings/googlePlay.svg';
import { marketPlaceUrl } from '../../../utils/default';
import TextButton from '../../ui/buttons/text-button';

interface Props {
  closeModal: () => void;
}

const ControlSubscriptionModal: React.FC<Props> = (props) => {

  return (
    <FormBackdrop onClick={props.closeModal}>
      <div
        className={styles.modalContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.header}>
          <img src={controlSub} alt="trashIcon"/>

        </div>
        <h3>Control subscription in the App</h3>
        <p>Looks like your subscription was purchased in our <strong>EMDR Tappers </strong>app. Sign in to this account
          from our app to manage your subscription or change your payment method.</p>
        <div className={styles.buttonsContainer}>
          <a
            href={marketPlaceUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="App store"
            className={styles.link}
          >
            <AppStoreIcon/>
          </a>
          <a
            href={marketPlaceUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Google play"
            className={styles.link}
          >
            <GooglePlayIcon/>
          </a>
        </div>

        <TextButton buttonText="close" onClick={props.closeModal} isWhiteButton style={styles.closeBtn}/>
      </div>
      ;
    </FormBackdrop>
  );
};

export default ControlSubscriptionModal;
