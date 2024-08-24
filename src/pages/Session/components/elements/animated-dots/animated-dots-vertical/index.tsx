import React from "react";
import {ActiveSessionStore} from "../../../../../../store/active-session-store";
import {observer} from "mobx-react";
import {SessionSettingsStore} from "../../../../../../store/session-settings-store";


const AnimatedDotsDiagonalVertical = observer(() => {

  return (
    <div
      style={{
        position: "absolute",
        left: `${50}%`,
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
  AnimatedDotsDiagonalVertical
}