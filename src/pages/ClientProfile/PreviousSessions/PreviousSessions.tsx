import React, { useEffect } from 'react';
import styles from './styles.module.scss';
import PreviousSessionItem from './PreviousSessionItem/PreviousSessionItem';
import { getClientSessionsList } from '../../../api/getClientSessionsList';
import { ISessionData } from '../../../api/types/sessionsResponse';

interface Props {
  id: number;
}

const PreviousSessions: React.FC<Props> = (props) => {
  const [sessions, setSessions] = React.useState<ISessionData[] | null>(null);
  useEffect(() => {
    getClientSessionsList().then((response) => {
      setSessions(response.data!.sessions.data)
    });
  }, []);
  return (
    <div className={styles.container}>
      <h4>Previous sessions</h4>
      {
        sessions?.map((session) => {
          return <PreviousSessionItem
            key={session._id}
            id={session._id}
            params={session.params}
            started_at={session.started_at}
            finished_at={session.finished_at}
          />

        })}

    </div>
  )
    ;
};

export default PreviousSessions;
