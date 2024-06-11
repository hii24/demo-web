import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Backdrop from '../components/Backdrop/Backdrop';
import CheckEmail from '../components/ForgotPassword/CheckEmail/CheckEmail';
import GetEmail from '../components/ForgotPassword/GetEmail/GetEmail';
import NewPassword from '../components/ForgotPassword/NewPassword/NewPassword';
import PasswordReset from '../components/ForgotPassword/PasswordReset/PasswordReset';
import HeaderLayout from '../components/Header/HeaderLayout';
import Login from '../components/Login/Login';
import Sidebar from '../components/Sidebar/Sidebar';
import ChooseRole from '../components/Signup/ChooseRole/ChooseRole';
import CreateAccount from '../components/Signup/CreateAccount/CreateAccount';
import TherapistAgreement from '../components/Signup/TherapistAgreement/TherapistAgreement';
import ClientsPage from '../components/pages/Clients/Clients';
import HistoryPage from '../components/pages/History/History';
import SessionPage from '../components/pages/Session/Session';
import StartSessionPage from '../components/pages/StartSession/StartSession';
import AuthStore from '../store/store';
import ClientProfile from '../components/pages/ClientProfile/ClientProfile';
import SessionInfo from '../components/pages/Clients/Sessioninfo/Sessioninfo';
import AffirmationsPage from '../components/pages/Affirmations/Affirmations';
import GuidedSessionsPage from '../components/pages/GuidedSessions/GuidedSessionsPage';
import ResourcingPage from '../components/pages/Resourcing/Resourcing';
import PreviewAudio from '../components/pages/PreviewAudio/PreviewAudio';
import authStore from '../store/store';
import { subscription } from '../api/subscription';
import sessionStore from '../store/sessionStore';
import DefaultLoader from '../components/DefaultLoader/DefaultLoader';
import Loader from '../components/Loader/Loader';

function RoutesWithLayout() {
  return (
    <>
      <Sidebar/>
      <Routes>
        <Route
          index
          element={
            <HeaderLayout>
              <StartSessionPage/>
            </HeaderLayout>
          }
        />
        <Route
          path="startSession"
          element={
            <HeaderLayout>
              <StartSessionPage/>
            </HeaderLayout>
          }
        />
        <Route
          path="clients"
          element={
            <HeaderLayout>
              <ClientsPage/>
            </HeaderLayout>
          }
        />
        <Route
          path="resourcing"
          element={
            <HeaderLayout>
              <ResourcingPage/>
            </HeaderLayout>
          }
        />
        <Route
          path="guidedSessions"
          element={
            <HeaderLayout>
              <GuidedSessionsPage/>
            </HeaderLayout>
          }
        />
        <Route
          path="affirmations"
          element={
            <HeaderLayout>
              <AffirmationsPage/>
            </HeaderLayout>
          }
        />
        <Route
          path="previewAudio"
          element={
            <HeaderLayout>
              <PreviewAudio/>
            </HeaderLayout>
          }
        />
        <Route
          path="sessionInfo"
          element={
            <HeaderLayout>
              <SessionInfo/>
            </HeaderLayout>
          }
        />
        <Route
          path="clientProfile"
          element={
            <HeaderLayout>
              <ClientProfile/>
            </HeaderLayout>
          }
        />
        <Route
          path="history"
          element={
            <HeaderLayout>
              <HistoryPage/>
            </HeaderLayout>
          }
        />
      </Routes>
    </>
  );
}

function RouterWithBackdrop() {
  return (
    <>
      <Backdrop>
        <Routes>
          <Route path="/session" Component={SessionPage}/>
          <Route path="/" element={<Navigate replace to={'/login'}/>}/>
          <Route path="/login" Component={Login} index/>
          <Route path="/getEmail" Component={GetEmail}/>
          <Route path="/checkEmail" Component={CheckEmail}/>
          <Route path="/newPassword" Component={NewPassword}/>
          <Route path="/passwordReset" Component={PasswordReset}/>
          <Route path="/chooseRole" Component={ChooseRole}/>
          <Route path="/therapistAgreement" Component={TherapistAgreement}/>
          <Route path="/createAccount" Component={CreateAccount}/>
          <Route path="*" element={<Navigate replace to={'/login'}/>}/>
        </Routes>
      </Backdrop>
    </>
  );
}

const Navigation = observer(() => {
  const isAuthenticated = AuthStore.isAuthenticated;
  useEffect(() => {
    isAuthenticated && subscription();
  }, []);
  if (authStore.loading) {
    return <Loader />
  }

  return (
    <BrowserRouter>
      {isAuthenticated ? (
        <>
          <Routes>
            <Route path="/" element={<RoutesWithLayout/>}>
              <Route path="startSession" Component={StartSessionPage}/>
              <Route path="clients" Component={ClientsPage}/>
              <Route path="affirmations" Component={AffirmationsPage}/>
              <Route path="guidedSessions" Component={GuidedSessionsPage}/>
              <Route path="resourcing" Component={ResourcingPage}/>
              <Route path="previewAudio" Component={PreviewAudio}/>
              <Route path="sessionInfo" Component={SessionInfo}/>
              <Route path="clientProfile" Component={ClientProfile}/>
              <Route path="history" Component={HistoryPage}/>
            </Route>
            <Route path="/session" Component={SessionPage}/>

            <Route
              path="*"
              element={<Navigate replace to={'/startSession'}/>}
            />
          </Routes>
        </>
      ) : (
        <>
          <Routes>
            <Route path="/" Component={RouterWithBackdrop}>
              <Route path="/" element={<Navigate replace to={'/login'}/>}/>
              <Route path="/login" Component={Login} index/>
              <Route path="/getEmail" Component={GetEmail}/>
              <Route path="/checkEmail" Component={CheckEmail}/>
              <Route path="/newPassword" Component={NewPassword}/>
              <Route path="/passwordReset" Component={PasswordReset}/>
              <Route path="/chooseRole" Component={ChooseRole}/>
              <Route
                path="/therapistAgreement"
                Component={TherapistAgreement}
              />
              <Route path="/createAccount" Component={CreateAccount}/>
            </Route>
            <Route path="/session" Component={SessionPage}/>
            <Route path="*" element={<Navigate replace to={'/login'}/>}/>
          </Routes>
        </>
      )}
    </BrowserRouter>
  );
});

export default Navigation;
