import React, { useEffect } from 'react';
import styles from './styles.module.scss';
import { useShowDisclaimerModal } from '../../../hooks/useShowDisclaimerModal';
import DisclaimerModal from '../../Modal/DisclaimerModal/DisclaimerModal';
import { getResources } from '../../../api/getResources';
import AudioBlock from '../../MediaComponents/AudioBlock/AudioBlock';
import SessionsFilter from './SessionsFilter/SessionsFilter';

const GuidedSessionsPage: React.FC = () => {
  const {showModal} = useShowDisclaimerModal();
  const [sessions, setSessions] = React.useState<any>([]);
  const [filter, setFilter] = React.useState<string | null>(null); // Add this line
  const handleFilterChange = (newFilter: string) => { // Add this function
    setFilter(newFilter);
  };
  useEffect(() => {
    getResources().then(
      (res) => {
        setSessions(res.data?.data.sessions);
      }
    );
  }, []);

  const renderAudioBlocks = () => {
    const filteredSessions = filter && filter !== 'All'
      ? sessions.filter((session: any) => session.tags.includes(filter))
      : sessions;

    return filteredSessions
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
      <SessionsFilter onFilterChange={handleFilterChange}/>
      <div className={styles.block}>
        {renderAudioBlocks()}
      </div>
      {showModal && <DisclaimerModal/>}
    </div>
  );
};

export default GuidedSessionsPage;
