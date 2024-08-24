import Loader from "../../components/ui/loaders/loader";
import {useNavigate, useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {ActiveSessionStore} from "../../store/active-session-store";

const SessionJoinPage = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const joinToSessionHandler = async () => {
    const id = searchParams.get('id');
    if (!id) return
    const isJoin = await ActiveSessionStore.joinSession(id)

    if (isJoin) {
      navigate('/session?id=' + id)
    }

  }


  useEffect(() => {
    joinToSessionHandler()
  }, []);

  return <Loader />
}

export {
  SessionJoinPage
}