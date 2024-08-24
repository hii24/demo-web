import FjordImage from "../assets/images/session/backgrounds/fjord.jpeg";
import MountainImage from "../assets/images/session/backgrounds/montain.jpeg";
import RiverImage from "../assets/images/session/backgrounds/river.jpeg";
import ValleyImage from "../assets/images/session/backgrounds/valley.jpeg";
import VolcanoImage from "../assets/images/session/backgrounds/volcano.jpeg";
import PathHorizontalImage from '../assets/vectors/session/path/horizontal.svg'
import PathDiagonalLeftUpImage from '../assets/vectors/session/path/diagonalLeftUp.svg'
import PathDiagonalRightUpImage from '../assets/vectors/session/path/diadonalRightUp.svg'
import PathVerticalImage from '../assets/vectors/session/path/vertical.svg'
import PathRandomImage from '../assets/vectors/session/path/random.svg'
import PositionCenterImage from '../assets/vectors/session/position/center.svg'
import PositionTopImage from '../assets/vectors/session/position/top.svg'
import PositionBottomImage from '../assets/vectors/session/position/bottom.svg'
// @ts-ignore
import sound1 from '../assets/sound/default.mp3'
// @ts-ignore
import soundBubbles from '../assets/sound/bubles.mp3'

export interface IVisualDotBackgroundColor {
  id: number
  name: string
  hex: string
  isPremium?: boolean
}

export interface IVisualSize {
  id: number
  name: string
  size: number
  isPremium?: boolean
}

export interface IVisualBackground {
  id: number
  name: string
  type: "color" | "image"
  img?: string
  hex?: string
  isPremium?: boolean
}

export interface IVisualPath {
  id: number
  name: string
  icon: string
  isPremium?: boolean
}

export interface IVisualPosition {
  id: number
  percent: number
  name: string
  icon: string
  isPremium?: boolean
}

export interface IVisualAudio {
  id: number
  name: string
  file: string
}

const VISUAL_DOT_BACKGROUND_COLORS: IVisualDotBackgroundColor[] = [
  {
    id: 1,
    name: "Light",
    hex: "#f9fafb",
    isPremium: false
  },
  {
    id: 2,
    name: "Dark",
    hex: "#0c111d",
    isPremium: false
  },
  {
    id: 3,
    name: "Orange",
    hex: "#f38744",
    isPremium: true
  },
  {
    id: 4,
    name: "Green",
    hex: "#099250",
    isPremium: false
  },
  {
    id: 5,
    name: "Pink",
    hex: "#dd2590",
    isPremium: false
  }
]

const VISUAL_SIZES:  IVisualSize[] = [
  {
    id: 1,
    name: "Small",
    size: 20,
  },
  {
    id: 2,
    name: "Medium",
    size: 26,
  },
  {
    id: 3,
    name: "Large",
    size: 36,
  }
]

const VISUAL_BACKGROUNDS: IVisualBackground[] = [
  {
    id: 1,
    name: "Dark",
    hex: "#0c111d",
    type: "color"
  },
  {
    id: 2,
    name: "Light",
    hex: "#f2f4f7",
    type: "color"
  },
  {
    id: 3,
    name: "Blue haze",
    hex: "#b3b8db",
    type: "color"
  },
  {
    id: 4,
    name: "Peacooock",
    hex: "#026aa2",
    type: "color",
  },
  {
    id: 5,
    name: "Everglade",
    hex: "#15483c",
    type: "color"
  },
  {
    id: 6,
    name: "Fjord",
    img: FjordImage,
    type: 'image'
  },
  {
    id: 7,
    name: "Mountain",
    img: MountainImage,
    type: 'image'
  },
  {
    id: 8,
    name: "River",
    img: RiverImage,
    type: 'image'
  },
  {
    id: 9,
    name: "Valley",
    img: ValleyImage,
    type: 'image'
  },
  {
    id: 10,
    name: "Volcano",
    img: VolcanoImage,
    type: 'image'
  },
]

const VISUAL_PATHS: IVisualPath[] = [
  {
    id: 1,
    name: "Horizontal",
    icon: PathHorizontalImage,
    isPremium: false
  },
  {
    id: 2,
    name: "Diagonal",
    icon: PathDiagonalLeftUpImage,
    isPremium: true
  },
  {
    id: 3,
    name: "Diagonal",
    icon: PathDiagonalRightUpImage,
    isPremium: true
  },
  {
    id: 4,
    name: "Vertical",
    icon: PathVerticalImage,
    isPremium: true
  },
  {
    id: 5,
    name: "Random",
    icon: PathRandomImage,
    isPremium: true
  },
]

const VISUAL_POSITIONS: IVisualPosition[] = [
  {
    id: 1,
    name: "Center",
    icon: PositionCenterImage,
    percent: 50
  },
  {
    id: 2,
    name: "Top",
    icon: PositionTopImage,
    percent: 15
  },
  {
    id: 3,
    name: "Bottom",
    icon: PositionBottomImage,
    percent: 85
  }
]

const VISUAL_AUDIOS: IVisualAudio[] = [
  {
    id: 1,
    name: "Chime",
    file: sound1,
  },
  {
    id: 2,
    name: "Bell",
    file: soundBubbles,
  },
  {
    id: 3,
    name: "Chalice",
    file: sound1,
  },
  {
    id: 4,
    name: "Bubbles",
    file: soundBubbles,
  },
  {
    id: 5,
    name: "Waves",
    file: sound1,
  },
  {
    id: 6,
    name: "Heartbeat",
    file: soundBubbles,
  },
  {
    id: 7,
    name: "Drumstick",
    file: PositionCenterImage,
  },
  {
    id: 8,
    name: "Finger snaps",
    file: soundBubbles,
  },
]

export const VISUAL_SETTINGS = {
  dotBackgroundColors: VISUAL_DOT_BACKGROUND_COLORS,
  sizes: VISUAL_SIZES,
  backgrounds: VISUAL_BACKGROUNDS,
  paths: VISUAL_PATHS,
  positions: VISUAL_POSITIONS,
  audios: VISUAL_AUDIOS
}

