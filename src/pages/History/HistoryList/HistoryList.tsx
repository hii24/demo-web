import React, { useEffect } from 'react';
import styles from './styles.module.scss';
import { getClientSessionsList } from '../../../api/getClientSessionsList';
import PreviousSessionItem from '../../ClientProfile/PreviousSessions/PreviousSessionItem/PreviousSessionItem';
import { ISessionData } from '../../../api/types/sessionsResponse';
import authStore from '../../../store/store';

const HistoryList: React.FC = () => {

  const [sessions, setSessions] = React.useState<ISessionData[] | null>(null);
  useEffect(() => {
    getClientSessionsList().then((response) => {
      setSessions(response.data!.sessions.data)
    });
  }, []);
  return (
    <div className={styles.container}>
      {
        sessions?.map((session) => {
          const clientName = !authStore.isClient && session?.client ? session?.client.name : ''
          return <PreviousSessionItem name={clientName} id={session._id} key={session._id} params={session.params}
                                      started_at={session.started_at}
                                      finished_at={session.finished_at}/>

        })}
    </div>
  );
};

export default HistoryList;
