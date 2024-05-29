import FjordImage from "../assets/images/session/backgrounds/fjord.jpeg";
import MontainImage from "../assets/images/session/backgrounds/montain.jpeg";
import RiverImage from "../assets/images/session/backgrounds/river.jpeg";
import ValleyImage from "../assets/images/session/backgrounds/valley.jpeg";
import VolcanoImage from "../assets/images/session/backgrounds/volcano.jpeg";
import { BackgroundEnum, OrbColorEnum, SizeEnum } from "../types/settings.type";
const backgroundsSessionColors = [
  {
    name: BackgroundEnum.DARK,
    background: "#0c111d",
  },
  {
    name: BackgroundEnum.LIGHT,
    background: "#f2f4f7",
  },
  {
    name: BackgroundEnum.BLUE_HAZE,
    background: "#b3b8db",
  },
  {
    name: BackgroundEnum.PEACOOCK,
    background: "#026aa2",
  },
  {
    name: BackgroundEnum.EVERGLADE,
    background: "#15483c",
  },
  {
    name: BackgroundEnum.FJORD,
    background: `url(${FjordImage}) center / cover no-repeat`,
  },
  {
    name: BackgroundEnum.MOUNTAIN,
    background: `url(${MontainImage}) center / cover no-repeat`,
  },
  {
    name: BackgroundEnum.RIVER,
    background: `url(${RiverImage}) center / cover no-repeat`,
  },
  {
    name: BackgroundEnum.VALLEY,
    background: `url(${ValleyImage}) center / cover no-repeat`,
  },
  {
    name: BackgroundEnum.VOLCANO,
    background: `url(${VolcanoImage}) center / cover no-repeat`,
  },
];

export const getBackground = (name: BackgroundEnum) => {
  return backgroundsSessionColors.find((item) => item.name === name)
    ?.background;
};

const orbColors = [
  {
    name: OrbColorEnum.DEFAULT,
    color: "#f9fafb",
  },
  {
    name: OrbColorEnum.DARK,
    color: "#0c111d",
  },
  { name: OrbColorEnum.ORANGE, color: "#f38744" },
  { name: OrbColorEnum.GREEN, color: "#099250" },
  { name: OrbColorEnum.PINK, color: "#dd2590" },
];

export const getOrbColor = (name: OrbColorEnum) => {
  return orbColors.find((item) => item.name === name)?.color;
};

const orbRadius = [
  {
    name: SizeEnum.SMALL,
    size: 20,
  },
  { name: SizeEnum.MEDIUM, size: 35 },
  { name: SizeEnum.LARGE, size: 50 },
];

export const getSizeOrb = (name: SizeEnum) => {
  return orbRadius.find((item) => item.name === name)?.size || 5;
};
