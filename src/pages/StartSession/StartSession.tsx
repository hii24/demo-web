import {observer} from 'mobx-react';
import React from 'react';
import authStore from '../../store/store';
import StartSessionClientPage from './Client/StartSession';
import StartSessionTherapistPage from './Therapist/StartSession';
import Sidebar from "../../components/general/sidebar/Sidebar";
import HeaderLayout from "../../components/general/header";

const StartSessionPage: React.FC = observer(() => {

  return (
    <>
      <Sidebar/>
      <HeaderLayout>
        {
          authStore.isClient ? (
            <StartSessionClientPage/>
          ) : (
            <StartSessionTherapistPage/>
          )
        }
      </HeaderLayout>

    </>
  );
});

export default StartSessionPage;
