import React from "react";
import AuditorySettings from "./AuditorySettings/AuditorySettings";
import TactileSettings from "./TactileSettings/TactileSettings";
import VisualSettings from "./VisualSettings/VisualSettings";

const SettingsMenu: React.FC = () => {
  return (
    <>
      <VisualSettings />
      <AuditorySettings />
      <TactileSettings />
    </>
  );
};

export default SettingsMenu;
