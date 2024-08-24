import c from './style.module.scss'
import {observer} from "mobx-react";
import VisualSettingsMobile from "./components/visual-settings-mobile";
import React from "react";
import AuditorySettingsMobile from "./components/auditory-settings-mobile";
import {SessionSidebarStore} from "../../../../../../store/session-sidebar-store";

const SessionMobileSettings = observer(() => {
  const wrapClass = SessionSidebarStore.activeMobileSettings ? `${c.wrap} ${c.wrapActive}` : c.wrap

  return (
    <div
      className={wrapClass}
    >
      {
        SessionSidebarStore.activeMobileSettings === 'visual' && (
          <VisualSettingsMobile />
        )
      }
      {
        SessionSidebarStore.activeMobileSettings === 'auditory' && (
          <AuditorySettingsMobile />
        )
      }
    </div>
  )
})

export {
  SessionMobileSettings
}