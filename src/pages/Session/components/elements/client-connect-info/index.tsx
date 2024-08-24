import c from './style.module.scss'
import {FC} from "react";

interface IClientConnectInfo {
  isConnect: boolean
}

const ClientConnectInfo: FC<IClientConnectInfo> = ({isConnect}) => {
  const text = isConnect ? "Client connected" : "No client connected"

  return (
    <div className={c.wrap}>
      <div style={{backgroundColor: isConnect ? "#079455" : "#D92D20"}} className={c.dec} />
      <span className={c.text}>{text}</span>
    </div>
  )
}

export {
  ClientConnectInfo
}