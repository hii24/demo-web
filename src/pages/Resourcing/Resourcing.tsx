import React, { useEffect } from 'react';
import styles from './styles.module.scss';
import { useShowDisclaimerModal } from '../../hooks/useShowDisclaimerModal';
import DisclaimerModal from '../../components/modals/DisclaimerModal/DisclaimerModal';
import { getResources } from '../../api/getResources';
import VideoBlock from '../../components/media/VideoBlock/VideoBlock';
import AudioBlock from '../../components/media/AudioBlock/AudioBlock';
import Sidebar from "../../components/general/sidebar/Sidebar";
import HeaderLayout from "../../components/general/header";

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
          key={resource.id}
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
          key={resource.id}
          title={resource.title}
          source={resource.source}
          img={resource.img}
          duration={resource.duration}
          id={resource.id}
        />
      ));
  };
  return (
    <>
      <Sidebar />
      <HeaderLayout>
        <div className={styles.container}>
          <div className={styles.block}>
            {renderVideoBlocks()}
          </div>
          <div className={styles.block}>
            {renderAudioBlocks()}
          </div>
          {showModal && <DisclaimerModal/>}
        </div>
      </HeaderLayout>
    </>
  );
};

export default ResourcingPage;
