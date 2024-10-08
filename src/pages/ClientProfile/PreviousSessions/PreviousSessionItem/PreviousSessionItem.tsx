import React from 'react';
import styles from './styles.module.scss';
import timeIcon from '../../../../assets/vectors/clients/time.svg';
import FillButton from '../../../../components/ui/buttons/fill-button';
import TextButton from '../../../../components/ui/buttons/text-button';
import documentIcon from '../../../../assets/vectors/clients/documentIcon.svg';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

interface SessionParams {
  bg: string;
  color: string;
  sound: string;
  passes: number;
}

interface Props {
  id: string;
  started_at: number;
  finished_at: number;
  name?: string;
  params: SessionParams;
}

const PreviousSessionItem: React.FC<Props> = (props) => {
  const navigate = useNavigate();


  const handleNavigateToSession = () => {
    navigate(`/sessionInfo`, {state: {id: props.id}});
  }
  /*
    const handleEditNotes = () => {
      setEditNotes(!editNotes);
    };
   */
  const duration = moment.duration(moment.unix(props.finished_at).diff(moment.unix(props.started_at)));
  const minutes = Math.floor(duration.asMinutes());
  const seconds = duration.seconds();
  const formattedDuration = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} min`;
  return (
    <div className={styles.container}>

      <div className={styles.container}>
        <div className={styles.details}>
          <div className={styles.info}>
            {props.name && <p className={styles.name}>{props.name}</p>}
            <div className={styles.baseInfo}>
              <h4>{moment.unix(props.started_at).format('dddd, D MMM ’YY')}</h4>
              <p>{moment.unix(props.started_at).format('h:mm a')}</p>
            </div>
            <div className={styles.duration}>
              <img src={timeIcon} alt="time"/>
              <p>{formattedDuration}</p>
            </div>
          </div>
          <div className={styles.params}>
            <div>
              <p><span>Passes:</span> {props.params.passes}</p>
              <p><span>Sound:</span> {props.params.sound}</p>
            </div>
            <div>
              <p><span>Color:</span> {props.params.color}</p>
              <p><span>BG:</span> {props.params.bg}</p>
            </div>
          </div>
        </div>
        <div className={styles.btns}>
          <TextButton buttonText="View notes" onClick={handleNavigateToSession}>
            <img src={documentIcon} alt="documentIcon"/>
          </TextButton>
          <FillButton isWhiteButton buttonText="Load session" onClick={() => alert('Load session')}/>
        </div>
      </div>

    </div>
  );
};

export default PreviousSessionItem;
