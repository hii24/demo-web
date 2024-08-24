import { makeAutoObservable } from "mobx";

type ActiveMobileSettingsType = "visual" | "auditory" | "tactile" | null

class SessionSidebar {
  activeMobileSettings: ActiveMobileSettingsType = null
  isTimerSliderShow = false
  isActive = false
  isVisualSettingActive = false
  isAudioSettingActive = false
  isTactileSettingActive = false
  isNoteModalShow = false
  isEndSessionModalShow = false
  isMobileVisualActive = false
  isMobileAuditoryActive = false
  isMobileTactileActive = false
  isMobileBarOpen = false


  constructor() {
    makeAutoObservable(this);
  }

  openNoteModal() {
    this.isNoteModalShow = true
  }

  closeNoteModal() {
    this.isNoteModalShow = false
  }
 openEndSessionModal() {
    this.isEndSessionModalShow = true
  }

  closeEndSessionModal() {
    this.isEndSessionModalShow = false
  }

  toggleActive = () => {
    this.isActive = !this.isActive;
  };

  toggleVisualSettingsActive = () => {
    this.isVisualSettingActive = !this.isVisualSettingActive;
  };

  toggleAudioSettingsActive = () => {
    this.isAudioSettingActive = !this.isAudioSettingActive;
  };

  toggleTactileSettingsActive = () => {
    this.isTactileSettingActive = !this.isTactileSettingActive;
  };

  toggleIsTimerSliderShow() {
    this.isTimerSliderShow = !this.isTimerSliderShow
  }

  closeTimerSlider() {
    this.isTimerSliderShow = false
  }

  changeMobileVisualActive(val: boolean) {
    this.isMobileVisualActive = val
  }

  changeMobileAuditoryActive(val: boolean) {
    this.isMobileAuditoryActive = val
  }

  changeMobileTactileActive(val: boolean) {
    this.isMobileTactileActive = val
  }

  toggleMobileBar() {
    this.isMobileBarOpen = !this.isMobileBarOpen
  }


  changeActiveMobileSettings(val: ActiveMobileSettingsType) {
    this.activeMobileSettings = val
  }

  closeMobileSettings() {
    this.activeMobileSettings = null
  }

}

const SessionSidebarStore = new SessionSidebar();

export {
  SessionSidebarStore
};
