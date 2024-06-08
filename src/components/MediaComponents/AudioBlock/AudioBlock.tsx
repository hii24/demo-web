import React from 'react';
import styles from './styles.module.scss';
import moment from 'moment';
import AudionIcon from '../../../assets/vectors/resourcing/audio.svg';
import PlayIcon from '../../../assets/vectors/resourcing/play.svg';
import PremiumButton from '../PremiumButton/PremiumButton';
import authStore from '../../../store/store';
import { useNavigate } from 'react-router-dom';

interface IProps {
  title: string,
  source: string,
  img: string,
  duration: number,
  id: string,
}

const AudioBlock: React.FC<IProps> = (props) => {
  const duration = moment.duration(props.duration, 'seconds');
  const formattedDuration = `${duration.minutes()}:${duration.seconds()}`;


  const navigate = useNavigate();
  const onHandleNavigate = () => {
    navigate('/previewAudio', {state: {source: props.source, title: props.title, img: props.img, duration: props.duration}})
  }
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {authStore.premium ?
          <div className={styles.playBtn} onClick={onHandleNavigate}>
            <img src={PlayIcon} alt="play icon"/>
            <p>Start session</p>
          </div> :
          <PremiumButton/>}
        <img className={styles.img} src={props.img} alt="audio"/>

      </div>
      <div className={styles.info}>
        <img className={styles.svg} src={AudionIcon} alt="AudionIcon"/>
        <div className={styles.videoInfo}>
          <h3>{props.title}</h3>
          <p><span>Audio</span>{formattedDuration} min</p>
        </div>
      </div>
    </div>
  );
};

export default AudioBlock;
