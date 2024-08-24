import React from "react";
import styles from "./styles.module.scss";
import { useLocation, useNavigate } from 'react-router-dom';
import ArrowLeft from '../../assets/vectors/resourcing/arrowLeft.svg';
import AudionIcon from '../../assets/vectors/resourcing/audio.svg';
import moment from 'moment/moment';
import StartBLSSession from '../Affirmations/StartBLSSession/StartBLSSession';
import Sidebar from "../../components/general/sidebar/Sidebar";
import HeaderLayout from "../../components/general/header";

const PreviewAudio: React.FC = () => {
  const navigate = useNavigate();
  const {state} = useLocation();
  const duration = moment.duration(state.duration, 'seconds');
  const formattedDuration = `${duration.minutes()}:${duration.seconds()}`;
  return (
    <>
      <Sidebar />
      <HeaderLayout>
        <div className={styles.container}>
          <div className={styles.goBack}  onClick={() => navigate(-1)}>
            <img src={ArrowLeft} alt="play icon"/>
            <p>Go back</p>
          </div>
          <div className={styles.container}>
            <div className={styles.content}>
              <img className={styles.img} src={state.img} alt="audio"/>

            </div>
            <div className={styles.info}>
              <img className={styles.svg} src={AudionIcon} alt="AudionIcon"/>
              <div className={styles.videoInfo}>
                <h3>{state.title}</h3>
                <p><span>Audio</span>{formattedDuration} min</p>
              </div>
            </div>
          </div>
          <audio controls preload="auto" className={styles.audio} controlsList="nodownload">
            <source src={state.source} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <p className={styles.description}>You can use this audio in a BLS session.</p>
          <StartBLSSession onClick={() => {
            alert(`Start BLS session ${state.id}`)
          }}/>
        </div>
      </HeaderLayout>
    </>
  );
};

export default PreviewAudio;
