import {observer} from "mobx-react";
import React from "react";
import c from "./styles.module.scss";
import SizeSettings
  from "../../../../../elements/size=settings/SizeSettings";
import BackgroundSettings
  from "../../../../../elements/background-settings/BackgroundSettings";
import PathSettings
  from "../../../../../elements/path-settings/PathSettings";
import PositionSettings
  from "../../../../../elements/position-settings/PositionSettings";
import OrbColorSettings
  from "../../../../../elements/orb-color-settings/OrbColorSettings";
import ToggleButton from "../../../../../../../../components/ui/buttons/toggle-button";
import SessionAnimationScreen from "../../../../../elements/session-animation-screen";
import {SessionMobileSettingsTopBar} from "../session-mobile-settings-top-bar";
import {SessionSidebarStore} from "../../../../../../../../store/session-sidebar-store";

const VisualSettingsMobile = () => {

  return (
    <div className={c.wrap}>
      <SessionMobileSettingsTopBar
        toggleNode={(
          <ToggleButton
            hideIcon={true}
            isActive={SessionSidebarStore.isMobileVisualActive}
            toggleActive={() => SessionSidebarStore.changeMobileVisualActive(!SessionSidebarStore.isMobileVisualActive)}
            title={`Visual Settings`}
          />
        )}
      />
      <div className={c.container}>
        <div>
          <div className={c.preview}>
            {
              SessionSidebarStore.activeMobileSettings && (
                <SessionAnimationScreen/>
              )
            }
          </div>
        </div>
        <div className={c.right}>
          <div className={c.content}>
            <SizeSettings/>
            <OrbColorSettings/>
            <BackgroundSettings/>
            <PathSettings/>
            <PositionSettings/>
            <div style={{height: "40px"}}/>
          </div>
        </div>
      </div>
    </div>

  );
};

export default observer(VisualSettingsMobile);
