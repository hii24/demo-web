import React, { useRef } from 'react';
import FormBackdrop from '../../ui/wrappers/form-backdrop';
import styles from './styles.module.scss';

interface Props {
  isVisible: boolean;
  onClose: () => void;
  videoSrc: string;
}

const VideoPlayerModal: React.FC<Props> = (props) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    props.onClose();
  }

  if (!props.isVisible) {
    return null;
  }

  const handleVideoClick = (event: React.MouseEvent<HTMLVideoElement>) => {
    event.stopPropagation();
  }

  return (
    <FormBackdrop onClick={handleClose}>
      <video ref={videoRef} onClick={handleVideoClick} controls className={styles.video} controlsList="nodownload">
        <source src={props.videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </FormBackdrop>
  );
};

export default VideoPlayerModal;
