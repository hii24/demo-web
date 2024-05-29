// store/VisualSettingsStore.js

import { makeAutoObservable } from "mobx";
import {
  BackgroundEnum,
  OrbColorEnum,
  PathSettingsEnum,
  PositionEnum,
  SizeEnum,
} from "../types/settings.type";

class VisualSettingsStore {
  activeBackground = BackgroundEnum.DARK;
  activeColor = OrbColorEnum.DEFAULT;
  activePath = PathSettingsEnum.HORIZONTAL;
  activePosition = PositionEnum.CENTER;
  activeSize = SizeEnum.SMALL;
  isMenuOpen = false;
  isActive = false;

  constructor() {
    makeAutoObservable(this);
  }

  toggleIsActive = () => {
    this.isActive = !this.isActive;
  };

  setActiveBackground = (background: BackgroundEnum) => {
    console.log(this.activeColor);
    if (
      background === BackgroundEnum.DARK &&
      this.activeColor === OrbColorEnum.DARK
    ) {
      this.activeColor = OrbColorEnum.DEFAULT;
    }
    if (
      background === BackgroundEnum.LIGHT &&
      this.activeColor === OrbColorEnum.DEFAULT
    ) {
      this.activeColor = OrbColorEnum.DARK;
    }
    this.activeBackground = background;
    return;
  };

  setActiveColor = (color: OrbColorEnum) => {
    if (
      color === OrbColorEnum.DEFAULT &&
      this.activeBackground === BackgroundEnum.LIGHT
    ) {
      this.activeBackground = BackgroundEnum.DARK;
    }
    if (
      color === OrbColorEnum.DARK &&
      this.activeBackground === BackgroundEnum.DARK
    ) {
      this.activeBackground = BackgroundEnum.LIGHT;
    }
    this.activeColor = color;
  };

  setActivePath = (path: PathSettingsEnum) => {
    this.activePath = path;
  };

  setActivePosition = (position: PositionEnum) => {
    this.activePosition = position;
  };

  setActiveSize = (size: SizeEnum) => {
    this.activeSize = size;
  };

  toggleMenu = () => {
    this.isMenuOpen = !this.isMenuOpen;
  };

  closeMenu = () => {
    this.isMenuOpen = false;
  };

  openMenu = () => {
    this.isMenuOpen = true;
  };
}

const visualSettingsStore = new VisualSettingsStore();

export default visualSettingsStore;
