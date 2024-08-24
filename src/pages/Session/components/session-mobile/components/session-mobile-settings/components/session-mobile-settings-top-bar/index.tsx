import c from './style.module.scss'
import React, {FC, ReactNode} from "react";
import closeIcon from "../../../../../../../../assets/images/icons/icon-close.svg";
import {SessionSidebarStore} from "../../../../../../../../store/session-sidebar-store";

interface ISessionMobileSettingsTopBar {
  toggleNode: ReactNode
}

const SessionMobileSettingsTopBar: FC<ISessionMobileSettingsTopBar> = ({toggleNode}) => {

  return (
    <div className={c.topBar}>
      <>{toggleNode}</>

      <div className={c.close} onClick={() => SessionSidebarStore.closeMobileSettings()}>
        <img src={closeIcon} alt=""/>
      </div>
    </div>
  )
}

export {
  SessionMobileSettingsTopBar
}