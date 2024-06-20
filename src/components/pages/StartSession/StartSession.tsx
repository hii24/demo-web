import { observer } from 'mobx-react';
import React from 'react';
import authStore from '../../../store/store';
import StartSessionClientPage from './Client/StartSession';
import StartSessionTherapistPage from './Therapist/StartSession';

const StartSessionPage: React.FC = observer(() => {
  return (
    <>
      {authStore.isClient ? (
        <StartSessionClientPage/>
      ) : (
        <StartSessionTherapistPage/>
      )}
    </>
  );
});

export default StartSessionPage;
