import React, { useEffect } from 'react';
import styles from './styles.module.scss';
import { useShowDisclaimerModal } from '../../../hooks/useShowDisclaimerModal';
import DisclaimerModal from '../../Modal/DisclaimerModal/DisclaimerModal';
import { getResources } from '../../../api/getResources';
import VideoBlock from '../../MediaComponents/VideoBlock/VideoBlock';
import AudioBlock from '../../MediaComponents/AudioBlock/AudioBlock';
import { useNavigate } from 'react-router-dom';

const ResourcingPage: React.FC = () => {

  const {showModal} = useShowDisclaimerModal();
  const [resourcing, setResourcing] = React.useState<any>([]);
  useEffect(() => {
    getResources().then(
      (res) => {
        setResourcing(res.data?.data.resourcing);
      }
    );
  }, []);

  const renderVideoBlocks = () => {
    return resourcing
      .filter((resource: any) => resource.type === 'video')
      .map((resource: any) => (
        <VideoBlock

          title={resource.title}
          source={resource.source}
          img={resource.img}
          duration={resource.duration}
          id={resource.id}
        />
      ));
  };

  const renderAudioBlocks = () => {
    return resourcing
      .filter((resource: any) => resource.type === 'audio')
      .map((resource: any) => (
        <AudioBlock
          title={resource.title}
          source={resource.source}
          img={resource.img}
          duration={resource.duration}
          id={resource.id}
        />
      ));
  };
  return (
    <div className={styles.container}>
      <div className={styles.block}>
        {renderVideoBlocks()}
      </div>
      <div className={styles.block}>
        {renderAudioBlocks()}
      </div>
      {showModal && <DisclaimerModal/>}
    </div>
  );
};

export default ResourcingPage;
