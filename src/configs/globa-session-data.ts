export interface IInitGlobalSessionData {
  dotSizeId: number
  dotColorId: number
  backgroundId: number
  dotPathId: number
  dotPositionId: number
  audioId: number
  speed: number
  isStart: 0 | 1,
  isPause: 0 | 1,
  duration: number
}

const INIT_GLOBAL_SESSION_DATA: IInitGlobalSessionData = {
  dotSizeId: 1,
  dotColorId: 1,
  backgroundId: 1,
  dotPathId: 1,
  dotPositionId: 1,
  audioId: 1,
  speed: 5,
  isStart: 0,
  isPause: 0,
  duration: 10
}

export {
  INIT_GLOBAL_SESSION_DATA
}