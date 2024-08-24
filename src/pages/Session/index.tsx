import React, {useEffect} from "react";
import SessionMobile from "./components/session-mobile";
import SessionPc from "./components/session-pc";
import useDeviceInfo from "../../hooks/device-info.hook";
import {ActiveSessionStore} from "../../store/active-session-store";
import { useSearchParams} from "react-router-dom";
import {SessionNotesModal} from "../../components/modals/session-notes-modal";
import {observer} from "mobx-react";
import {SessionEndModal} from "../../components/modals/session-end-modal";
import {SessionSidebarStore} from "../../store/session-sidebar-store";
import Loader from "../../components/ui/loaders/loader";

/*
  const test = async () => {
    const data = await createSession()
    const dataShare = await shareSession(data.data.id)
    setSessionId(data.data.id)
  }
  const [sessionId, setSessionId] = useState<null | string>(null)

 */

const SessionPage: React.FC = observer(() => {
  const {isMobile} = useDeviceInfo()
  const [searchParams] = useSearchParams()


  useEffect(() => {
    const id = searchParams.get('id');
    if (!id) return
    ActiveSessionStore.connectToSession(id)
  }, []);

  if (!ActiveSessionStore.hostInfo) return <Loader />

  return (
    <div>
      {
        SessionSidebarStore.isNoteModalShow && (
          <SessionNotesModal />
        )
      }
      {
        SessionSidebarStore.isEndSessionModalShow && (
          <SessionEndModal />
        )
      }
      {isMobile ? <SessionMobile /> : <SessionPc />}
    </div>
  )
})

export {
  SessionPage
}
