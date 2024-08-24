import {makeAutoObservable} from "mobx";
import {IVisualAudio, VISUAL_SETTINGS} from "../configs/visual-settings";
import {SessionSettingsStore,ISessionSetting} from "./session-settings-store";
import {io} from "socket.io-client";
import {getSession} from "../api/session/get-session";
import authStore from "./store";
import {shareSession} from "../api/session/share-session";
import {createSession} from "../api/session/create-session";
import {joinSession} from "../api/session/join-session";
import {SessionSidebarStore} from "./session-sidebar-store";
import {INIT_GLOBAL_SESSION_DATA} from "../configs/globa-session-data";

interface IDotsPathMovement {
  value: number
  direction: "start" | "end"
}

interface IDotsRandomMovement {
  left: number
  top: number,
  angle: number
}

type ActiveMoveStateType = "path" | "random"

const INIT_RANDOM_MOVEMENT: IDotsRandomMovement = {
  left: 50,
  top: 50,
  angle: Math.random() * 360,
}

const INIT_PATH_MOVEMENT: IDotsPathMovement = {
  value: 50,
  direction: "end"
}

interface ISessionFrameInfo {
  path: IDotsPathMovement
  random: IDotsRandomMovement
  time: number
  passesCount: number
}

interface IHostInfo {
  host: string
  channel: string
}

type SessionRoleType = "host" | "client" | "tactile-right" | "tactile-left"

class ActiveSession {
  sessionId = ""
  sharedUsersId = ''
  socket: any = null;
  hostInfo: IHostInfo | null = null
  creatorId = ''
  clientRole: SessionRoleType = "host"

  activeMoveState: ActiveMoveStateType = "path"
  isStart: boolean = false;
  isPause: boolean = false;
  activeAudio = new Audio(VISUAL_SETTINGS.audios[0].file)

  sessionFrameInfo: ISessionFrameInfo = {
    path: INIT_PATH_MOVEMENT,
    random: INIT_RANDOM_MOVEMENT,
    time: 10 * 60 * 1000,
    passesCount: 0
  }


  constructor() {
    makeAutoObservable(this);
  }


  async createSession(): Promise<string | null> {
    const data = await createSession()
    console.log(data, 'data')
    if (data) {
      await shareSession(data.data.id)
      return data.data.id
    } else {
      alert("error")
      return null
    }
  }

  async joinSession(id: string): Promise<boolean> {
    const data = await joinSession(id)
    if (data) {
      return true
    } else {
      alert("error")
      return false
    }
  }

  async connectToSession(id: string) {
    const data = await getSession(id)

    if (data.success) {
      this.sessionId = id
      const isHost = data.data.session.created_by.uid === authStore.user?.uid
      this.clientRole = isHost ? "host" : "client"
      this.creatorId = data.data.session.created_by.uid
      this.hostInfo = data.data.session.socket
      this.connect()


      console.log(this.clientRole, 'clientRole')
      console.log(data, 'session data')
      SessionSettingsStore.setSettingBySessionConfig(data.data.session.settings)

      // set shared userId
      if (isHost && data.data.session.shared_to) {
        this.sharedUsersId = data.data.session.shared_to.uid
      }
    } else {
      alert("error")
    }
  }

  connect() {
    if (!this.hostInfo || !authStore.user) return
    this.socket = io(`https://${this.hostInfo.host}/`, {
      query: {channel: this.hostInfo.channel, uid: authStore.user.uid},
    });

    this.socket = io(`https://${this.hostInfo.host}/`, {
      query: {channel: this.hostInfo.channel, uid: authStore.user.uid},
    });

    // Обробка подій
    this.socket.on('connected', (data: any) => {
      console.log('Інший клієнт підключився:', data.id);
    });

    this.socket.on('disconnected', (data: any) => {
      console.log('Інший клієнт відключився:', data.id);
    });

    this.socket.on('settings', (data: any) => {
      console.log('Settings updated:', data);
    });

    this.socket.on(authStore.user.uid, (data: any) => {
      if (data.command.actionType === 'frame-data') {
        requestIdleCallback(() => {
            this.changeConfigByShare(data.command.config)
        })
      }
    });
  }

  sendMessage() {
    if (this.socket) {
      this.socket.emit('msg', {
        from: authStore.user?.uid!, to: this.sharedUsersId, command: {
          config: {...this.sessionFrameInfo},
          actionType: "frame-data"
        },
      });

      this.socket.emit('msg', {
        from: authStore.user?.uid!, to: authStore.user?.uid!, command: {
          config: {...this.sessionFrameInfo},
          actionType: "frame-data"
        },
      });
    }
  }

  setSessionSettings() {
    alert("work")
    this.socket.emit('settings', INIT_GLOBAL_SESSION_DATA);
  }

  changeConfigByShare(config: ISessionFrameInfo) {
    console.log(config, 'config')
    this.sessionFrameInfo = config
  }


  // Метод для відключення від сокета
  disconnect() {
    if (this.socket) {
      this.socket.close();
      this.socket = null;
    }
  }

  setNewTime(time: number) {
    this.sessionFrameInfo.time = time * 60 * 1000
  }

  startTimeCounter() {
    if (!this.isStart || this.isPause) return
    setTimeout(() => {
      this.startTimeCounter()
    }, 1000)
    this.sessionFrameInfo.time -= 1000
  }

  setActiveAudio(audio: IVisualAudio) {
    this.activeAudio = new Audio(audio.file);
  }

  setActiveMoveState(state: ActiveMoveStateType) {
    this.activeMoveState = state
    this.sessionFrameInfo.random = {
      ...INIT_RANDOM_MOVEMENT,
      angle: Math.random() * 360,
    }
    this.sessionFrameInfo.path = INIT_PATH_MOVEMENT

    if (this.isStart && !this.isPause) {
      this.startAnimate()
    }
  }



  togglePause() {
    this.isPause = !this.isPause
    if (!this.isPause) {
      this.startAnimate()
    }
  }

  startAnimate() {
    SessionSidebarStore.closeTimerSlider()
    this.isStart = true

    if (this.activeMoveState === 'path') {
      this.moveDot()
    } else if (this.activeMoveState === 'random') {
      this.moveDotRandom()
    }

    this.startTimeCounter()
  }

  endAnimate() {
    SessionSidebarStore.closeTimerSlider()
    SessionSettingsStore.setSessionTime(10)
    this.isStart = false
    this.isPause = false
    this.sessionFrameInfo.passesCount = 0
    this.sessionFrameInfo.path = {
      value: 50,
      direction: "end"
    }
  }

  moveDotRandom() {
    if (this.isPause || !this.isStart || this.activeMoveState !== 'random' || this.clientRole !== 'host') return
    const {angle} = this.sessionFrameInfo.random;

    // Обчислення нової позиції
    this.sessionFrameInfo.random.left += SessionSettingsStore.speed / 10 * Math.cos(angle * (Math.PI / 180));
    this.sessionFrameInfo.random.top += SessionSettingsStore.speed / 10 * Math.sin(angle * (Math.PI / 180));

    if (this.sessionFrameInfo.random.left <= 0 || this.sessionFrameInfo.random.left >= 100) {
      this.activeAudio.play().then(() => this.activeAudio.currentTime = 0)
      this.sessionFrameInfo.passesCount += 1
      this.sessionFrameInfo.random.angle = 180 - this.sessionFrameInfo.random.angle;
    }

    if (this.sessionFrameInfo.random.top <= 0 || this.sessionFrameInfo.random.top >= 100) {
      this.activeAudio.play().then(() => this.activeAudio.currentTime = 0)
      this.sessionFrameInfo.passesCount += 1
      this.sessionFrameInfo.random.angle = 360 - this.sessionFrameInfo.random.angle;
    }

    requestAnimationFrame(() => this.moveDotRandom());
  }

  moveDot() {
    if (this.isPause || !this.isStart || this.activeMoveState !== 'path' || this.clientRole !== 'host') return
    if (this.sessionFrameInfo.path.direction === 'end') {
      if (this.sessionFrameInfo.path.value < 100) {
        this.sessionFrameInfo.path = {
          value: this.sessionFrameInfo.path.value + 0.1 * SessionSettingsStore.speed,
          direction: "end"
        }
      } else {
        this.activeAudio.play().then(() => this.activeAudio.currentTime = 0)
        this.sessionFrameInfo.passesCount += 1
        this.sessionFrameInfo.path = {
          value: 100,
          direction: "start"
        }
      }
    } else if (this.sessionFrameInfo.path.direction === 'start') {
      if (this.sessionFrameInfo.path.value > 0) {
        this.sessionFrameInfo.path = {
          value: this.sessionFrameInfo.path.value - 0.1 * SessionSettingsStore.speed,
          direction: "start"
        }
      } else {
        this.activeAudio.play().then(() => this.activeAudio.currentTime = 0)
        this.sessionFrameInfo.passesCount += 1
        this.sessionFrameInfo.path = {
          value: 0,
          direction: "end"
        }
      }
    }

    if (this.clientRole === 'host') {
      ActiveSessionStore.sendMessage()
      console.log('send')
    }

    requestAnimationFrame(() => this.moveDot());
  }

}

const ActiveSessionStore = new ActiveSession();

export {
  ActiveSessionStore
};
