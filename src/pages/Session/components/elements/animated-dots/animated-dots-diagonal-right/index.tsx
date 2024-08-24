import React from "react";
import {ActiveSessionStore} from "../../../../../../store/active-session-store";
import {observer} from "mobx-react";
import {SessionSettingsStore} from "../../../../../../store/session-settings-store";


const AnimatedDotsDiagonalRight = observer(() => {

  return (
    <div
      style={{
        position: "absolute",
        right: `${ActiveSessionStore.sessionFrameInfo.path.value}%`,
        top: `${ActiveSessionStore.sessionFrameInfo.path.value}%`,
        borderRadius: "50%",
        backgroundColor: SessionSettingsStore.activeColor.hex,
        height: SessionSettingsStore.activeSize.size,
        width: SessionSettingsStore.activeSize.size,
      }}
    />
  )
})

export {
  AnimatedDotsDiagonalRight
}