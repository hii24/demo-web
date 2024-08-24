import React from "react";
import {ActiveSessionStore} from "../../../../../../store/active-session-store";
import {observer} from "mobx-react";
import {SessionSettingsStore} from "../../../../../../store/session-settings-store";


const AnimatedDotsRandom = observer(() => {

  return (
    <div
      style={{
        position: "absolute",
        left: `${ActiveSessionStore.sessionFrameInfo.random.left}%`,
        top: `${ActiveSessionStore.sessionFrameInfo.random.top}%`,
        borderRadius: "50%",
        backgroundColor: SessionSettingsStore.activeColor.hex,
        height: SessionSettingsStore.activeSize.size,
        width: SessionSettingsStore.activeSize.size,
      }}
    />
  )
})

export {
  AnimatedDotsRandom
}