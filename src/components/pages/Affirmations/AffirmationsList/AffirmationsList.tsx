import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import PlayIcon from '../../../../assets/vectors/resourcing/playBtn.svg';
import PauseIcon from '../../../../assets/vectors/resourcing/pauseBtn.svg';
import { getResources } from '../../../../api/getResources';
import authStore from '../../../../store/store';
import LockAffirmationIcon from '../../../../assets/vectors/resourcing/lockAffirmations.svg';
import StartBLSSession from '../StartBLSSession/StartBLSSession';

const AffirmationsList: React.FC = () => {
  const [affirmations, setAffirmations] = useState<any>([]);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  useEffect(() => {
    getResources().then(
      (res) => {
        setAffirmations(res.data?.data.affirmations);
      }
    );
  }, []);

  const handleItemClick = (id: string) => {
    setActiveItem(prev => prev === id ? null : id);
  };

  return (
    <>
      {
        affirmations.map((affirmation: any) => (
          <AffirmationItem
            key={affirmation.id}
            id={affirmation.id}
            affirmationTitle={affirmation.title}
            source={affirmation.source}
            isActive={affirmation.id === activeItem}
            onItemClicked={handleItemClick}
          />
        ))
      }
      {activeItem &&
          <div className={styles.btnWrapper}>
              <StartBLSSession onClick={() => {
                alert(`Start BLS session ${activeItem}`)
              }}/>
          </div>
      }
    </>
  );
};

interface IAffirmationItemProps {
  affirmationTitle: string;
  source: string;
  isActive: boolean;
  onItemClicked: (id: string) => void;
  id: string;
}

const AffirmationItem: React.FC<IAffirmationItemProps> = (props) => {
  const [play, setPlay] = React.useState(false);
  const audioRef = useRef(new Audio(props.source));

  useEffect(() => {
    audioRef.current.onended = () => {
      setPlay(false);
    };
  }, []);

  const handlePlayClick = (e: any) => {
    if (!authStore.premium) {
      return;
    }
    e.stopPropagation();
    if (play) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    } else {
      audioRef.current.play();
    }
    setPlay(!play);
  };

  const handleClick = () => {
    authStore.premium && props.onItemClicked(props.id);
  };
  return (
    <div className={`${styles.container} ${props.isActive ? styles.isActive : ''} `} onClick={handleClick}>
      <div className={styles.info}>
        {authStore.premium ? <div className={styles.checkbox}/> :
          <img src={LockAffirmationIcon} alt="LockAffirmationIcon"/>}
        <p>{props.affirmationTitle}</p>
      </div>
      <div className={styles.playBtn} onClick={handlePlayClick}>
        {
          play
            ? <img src={PauseIcon} alt="PauseIcon"/>
            : <img src={PlayIcon} alt="PlayIcon"/>
        }
      </div>
    </div>
  );
};
export default AffirmationsList;
