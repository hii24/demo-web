import {observer} from 'mobx-react';
import React, {useEffect} from 'react';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import CheckEmail from '../components/general/forgot-password/CheckEmail/CheckEmail';
import GetEmail from '../components/general/forgot-password/GetEmail/GetEmail';
import NewPassword from '../components/general/forgot-password/NewPassword/NewPassword';
import PasswordReset from '../components/general/forgot-password/PasswordReset/PasswordReset';
import ChooseRole from '../components/general/signup/ChooseRole/ChooseRole';
import CreateAccount from '../components/general/signup/CreateAccount/CreateAccount';
import TherapistAgreement from '../components/general/signup/TherapistAgreement/TherapistAgreement';
import ClientsPage from '../pages/Clients/Clients';
import HistoryPage from '../pages/History/History';
import {SessionPage} from '../pages/Session';
import StartSessionPage from '../pages/StartSession/StartSession';
import AuthStore from '../store/store';
import ClientProfile from '../pages/ClientProfile/ClientProfile';
import SessionInfo from '../pages/Clients/Sessioninfo/Sessioninfo';
import AffirmationsPage from '../pages/Affirmations/Affirmations';
import GuidedSessionsPage from '../pages/GuidedSessions/GuidedSessionsPage';
import ResourcingPage from '../pages/Resourcing/Resourcing';
import PreviewAudio from '../pages/PreviewAudio/PreviewAudio';
import authStore from '../store/store';
import Loader from '../components/ui/loaders/loader';
import SettingsPage from '../pages/Settings/Settings';
import {LoginPage} from "../pages/login";
import {SessionJoinPage} from "../pages/session-join";



const Navigation = observer(() => {
  useEffect(() => {
    AuthStore.init();
  }, []);

  if (authStore.loading || !authStore.isInit) return <Loader/>


  return (
    <BrowserRouter>
      {
        AuthStore.isAuthenticated ? (
          <>
            <Routes>
              <Route path="/">
                <Route path="startSession" Component={StartSessionPage}/>
                <Route path="clients" Component={ClientsPage}/>
                <Route path="affirmations" Component={AffirmationsPage}/>
                <Route path="guidedSessions" Component={GuidedSessionsPage}/>
                <Route path="resourcing" Component={ResourcingPage}/>
                <Route path="previewAudio" Component={PreviewAudio}/>
                <Route path="sessionInfo" Component={SessionInfo}/>
                <Route path="clientProfile" Component={ClientProfile}/>
                <Route path="history" Component={HistoryPage}/>
                <Route path="settings" Component={SettingsPage}/>
              </Route>
              <Route path="/session" Component={SessionPage}/>
              <Route path="/session-join" Component={SessionJoinPage}/>

              <Route
                path="*"
                element={<Navigate replace to={'/startSession'}/>}
              />
            </Routes>
          </>
        ) : (
          <>
            <Routes>
              <Route path="/">
                <Route path="/" element={<Navigate replace to={'/login'}/>}/>
                <Route path="/login" Component={LoginPage} index/>
                <Route path="/getEmail" Component={GetEmail}/>
                <Route path="/checkEmail" Component={CheckEmail}/>
                <Route path="/newPassword" Component={NewPassword}/>
                <Route path="/passwordReset" Component={PasswordReset}/>
                <Route path="/chooseRole" Component={ChooseRole}/>
                <Route path="/therapistAgreement" Component={TherapistAgreement}/>
                <Route path="/createAccount" Component={CreateAccount}/>
              </Route>
              <Route path="/session" Component={SessionPage}/>
              <Route path="*" element={<Navigate replace to={'/login'}/>}/>
            </Routes>
          </>
        )
      }
    </BrowserRouter>
  );
});

export default Navigation;

