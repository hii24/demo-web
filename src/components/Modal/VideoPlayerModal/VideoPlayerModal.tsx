import React from 'react';
import FormBackdrop from '../../Backdrop/FormBackdrop/FormBackdrop';
import styles from './styles.module.scss';


interface Props {
  isVisible: boolean;
  onClose: () => void;
  videoSrc: string;
}

const VideoPlayerModal: React.FC<Props> = (props) => {


  if (!props.isVisible) {
    return null;
  }

  return (
    <FormBackdrop onClick={props.onClose}>
      <video controls className={styles.video}>
        <source src={props.videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </FormBackdrop>
  );
};

export default VideoPlayerModal;
