import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import RemoveEntityModal from '../../../Modal/RemoveEntityModal/RemoveEntityModal';
import { deleteClient } from '../../../../api/deleteClient';
import { useLocation, useNavigate } from 'react-router-dom';
import { getClientSession } from '../../../../api/getClientSession';
import { ISessionData } from '../../../../api/types/sessionsResponse';
import moment from 'moment/moment';
import timeIcon from '../../../../assets/vectors/clients/time.svg';
import { formatDuration } from '../../../../utils/formatDuration';
import DefaultLoader from '../../../DefaultLoader/DefaultLoader';
import ClientSessionNotes from './ClientSessionNotes/ClientSessionNotes';

const SessionInfo: React.FC = () => {

  const [session, setSession] = React.useState<ISessionData | null>(null);
  const location = useLocation();

  const handleSessionEdit = async () => {
    getClientSession(location.state.id).then((response) => {
      setSession(response.data?.session as any);
    });
  }
  useEffect(() => {
    handleSessionEdit();
  }, []);
  return !session ? <DefaultLoader/> : (
    <div className={styles.container}>
      <div className={styles.details}>
        <div className={styles.info}>
          <div className={styles.baseInfo}>
            <h4>{moment.unix(session.started_at).format('dddd, D MMM ’YY')}</h4>
            <p>{moment.unix(session.started_at).format('h:mm a')}</p>
          </div>
          <div className={styles.duration}>
            <img src={timeIcon} alt="time"/>
            <p>{formatDuration(session.started_at, session.finished_at)}</p>
          </div>
        </div>
        <div className={styles.params}>
          <div>
            <p><span>Passes:</span> {session.params.passes}</p>
            <p><span>Sound:</span> {session.params.sound}</p>
          </div>
          <div>
            <p><span>Color:</span> {session.params.color}</p>
            <p><span>BG:</span> {session.params.bg}</p>
          </div>
        </div>
      </div>
      <ClientSessionNotes id={location.state.id} notes={session.notes} handleSessionEdit={handleSessionEdit}/>

    </div>
  );
};

export default SessionInfo;
