import React from 'react';
import styles from './styles.module.scss';
import avatarClient from '../../../../../assets/vectors/clients/clientAvatar.svg'
import FillButton from '../../../../Buttons/FillButton/FillButton';
import { useNavigate } from 'react-router-dom';

interface Props {
  id: number;
  name: string;
  description: string;
}

const Client: React.FC<Props> = (props) => {
  const navigate = useNavigate();
  const navigateToClientProfile = () => {
    navigate(`/clientProfile`, { state: { id: props.id } });
  };

  return (
    <div className={styles.container}>
      <img src={avatarClient} alt="avatar"/>
      <div>
        <p>{props.name}</p>
        <p>{props.description || 'No description added'}</p>
      </div>
      <FillButton buttonText="View" onClick={navigateToClientProfile} isWhiteButton style={styles.button}/>
    </div>
  );
};

export default Client;
