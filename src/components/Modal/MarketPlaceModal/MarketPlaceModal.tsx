import React from "react";
import { ReactComponent as AppStoreIcon } from "../../../assets/vectors/marketplaces/appStore.svg";
import { ReactComponent as GooglePlayIcon } from "../../../assets/vectors/marketplaces/googlePlay.svg";
import { marketPlaceUrl } from "../../../utils/default";
import styles from "./styles.module.scss";

const MarketPlaceModal: React.FC = () => {
  return (
    <div className={styles.modalContainer}>
      <div className={styles.discription}>
        <span className={styles.title}>
          Enjoy a better experience with our app!
        </span>
        <span className={styles.subTitle}>
          We noticed you're using a mobile browser. We recommend downloading our
          mobile app for a faster, optimized, and more feature-rich experience.
        </span>
      </div>
      <div className={styles.buttonsContainer}>
        <a
          href={marketPlaceUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="App store"
          className={styles.link}
        >
          <AppStoreIcon />
        </a>
        <a
          href={marketPlaceUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Google play"
          className={styles.link}
        >
          <GooglePlayIcon />
        </a>
      </div>
    </div>
  );
};

export default MarketPlaceModal;
