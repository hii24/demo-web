import React, { useState } from 'react';
import styles from './styles.module.scss';
import moment from 'moment';
import VideoIcon from '../../../assets/vectors/resourcing/video.svg';
import PlayIcon from '../../../assets/vectors/resourcing/play.svg';
import authStore from '../../../store/store';
import PremiumButton from '../PremiumButton/PremiumButton';
import VideoPlayerModal from '../../Modal/VideoPlayerModal/VideoPlayerModal';

interface IProps {
  title: string,
  source: string,
  img: string,
  duration: number,
  id: string
}

const VideoBlock: React.FC<IProps> = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const duration = moment.duration(props.duration, 'seconds');
  const formattedDuration = `${duration.minutes()}:${duration.seconds()}`;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {authStore.premium ?
          <div className={styles.playBtn} onClick={() => setIsModalVisible(true)}>
            <img src={PlayIcon} alt="play icon"/>
            <p>Watch</p>
          </div> :
          <PremiumButton/>}
        <img className={styles.img} src={props.img} alt="video"/>

      </div>
      <div className={styles.info}>
        <img className={styles.svg} src={VideoIcon} alt="VideoIcon"/>
        <div className={styles.videoInfo}>
          <h3>{props.title}</h3>
          <p><span>Video</span>{formattedDuration} min</p>
        </div>
      </div>
      <VideoPlayerModal
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        videoSrc={props.source}
      />
    </div>
  );
};

export default VideoBlock;
