// store/SessionSettingsStore.js

import {makeAutoObservable, reaction} from "mobx";
import {
  IVisualAudio,
  IVisualBackground,
  IVisualDotBackgroundColor,
  IVisualPath, IVisualPosition,
  IVisualSize,
  VISUAL_SETTINGS
} from "../configs/visual-settings";
import {ActiveSessionStore} from "./active-session-store";
import {IInitGlobalSessionData} from "../configs/globa-session-data";
import {SessionApi} from "../api/session";

export interface ISessionSetting {
  sessionTime: number
  activeBackground: IVisualBackground
  activeColor: IVisualDotBackgroundColor
  activeSize: IVisualSize
  activePath: IVisualPath
  activePosition: IVisualPosition
  activeAudio: IVisualAudio
}

class SessionSettings {
  sessionTime = 10
  activeBackground = VISUAL_SETTINGS.backgrounds[0]
  activeColor = VISUAL_SETTINGS.dotBackgroundColors[0]
  activeSize = VISUAL_SETTINGS.sizes[0]
  activePath = VISUAL_SETTINGS.paths[0]
  activePosition = VISUAL_SETTINGS.positions[0]
  activeAudio = VISUAL_SETTINGS.audios[0]
  speed = 1




  constructor() {
    makeAutoObservable(this);

    reaction(
      () => this.activePath.id,
      (id) => {
        if (id !== 1) {
          this.setActivePosition(VISUAL_SETTINGS.positions[0]);
        }

        if (this.activePath.id === 5 && ActiveSessionStore.activeMoveState !== 'random') {
          ActiveSessionStore.setActiveMoveState("random")
        }

        if (this.activePath.id !== 5 && ActiveSessionStore.activeMoveState !== 'path') {
          ActiveSessionStore.setActiveMoveState("path")
        }
      }
    );
  }



  setSettingBySessionConfig(config: IInitGlobalSessionData) {
    this.speed = Number(config.speed)
  }

  addSpeed() {
    SessionApi.updateSessionField(ActiveSessionStore.sessionId, '123')
  }

  incrementSpeed() {
    if (this.speed === 1) return
  }

  setSessionTime(time: number) {
    this.sessionTime = time
    ActiveSessionStore.setNewTime(time)
  }

  setActiveBackground = (background: IVisualBackground) => {
    this.activeBackground = background;
  };

  setActiveColor = (color: IVisualDotBackgroundColor) => {
    this.activeColor = color;
  };

  setActivePath = (path: IVisualPath) => {
    this.activePath = path;
  };

  setActivePosition = (position: IVisualPosition) => {
    this.activePosition = position;
  };

  setActiveSize = (size: IVisualSize) => {
    this.activeSize = size;
  };

  setActiveAudio = (audio: IVisualAudio) => {
    this.activeAudio = audio;
    ActiveSessionStore.setActiveAudio(audio)
  };
}

const SessionSettingsStore = new SessionSettings();

export {
  SessionSettingsStore
};
