// store/VisualSettingsStore.js

import { makeAutoObservable } from "mobx";

class ControllerSettingsStore {
  isPlaying = false;
  isPaused = false;
  speed = 5;
  count = 0;

  constructor() {
    makeAutoObservable(this);
  }

  setSpeed = (speed: number) => {
    this.speed = speed;
  };

  addCount = () => {
    this.count += 1;
  };

  restCount = () => {
    this.count = 0;
  };

  start = () => {
    this.isPlaying = true;
    this.isPaused = false;
  };

  stop = () => {
    this.isPlaying = false;
    this.isPaused = false;
  };

  pause = () => {
    this.isPlaying = true;
    this.isPaused = true;
  };

  setPaused = () => {
    this.isPaused = !this.isPaused;
  };

  setPlaying = () => {
    this.isPlaying = !this.isPlaying;
  };
}

const controllerSettingsStore = new ControllerSettingsStore();

export default controllerSettingsStore;
