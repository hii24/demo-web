import React from "react";
import SettingsBlock from "../../../../../../../elements/settings-block";
import SoundValue from "../../../../../../../elements/sound-value";
import {IVisualAudio, VISUAL_SETTINGS} from "../../../../../../../../../../configs/visual-settings";
import {observer} from "mobx-react";
import {SessionSettingsStore} from "../../../../../../../../../../store/session-settings-store";


const SoundSettings = observer(() => {

  const submitHandler = (item: IVisualAudio) => {
    SessionSettingsStore.setActiveAudio(item)
  }

  return (
    <SettingsBlock title="Sound">
      {
        VISUAL_SETTINGS.audios.map(item => (
          <SoundValue
            key={item.id}
            title={item.name}
            isActive={SessionSettingsStore.activeAudio.id === item.id}
            onClick={() => submitHandler(item)}
          />
        ))
      }
    </SettingsBlock>
  );
})

export default SoundSettings;
