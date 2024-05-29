import React from "react";
import Sidebarfooter from "./SidebarFooter/SidebarFooter";
import SidebarLogo from "./SidebarLogo/SidebarLogo";
import SidebarNavigation from "./SidebarNavigation/SidebarNavigation";
import styles from "./styles.module.scss";

const Sidebar: React.FC = () => {
  return (
    <div className={styles.container}>
      <div>
        <SidebarLogo title="EMDR" subTitle="Tappers & Tools" />
        <SidebarNavigation />
      </div>
      <Sidebarfooter />
    </div>
  );
};

export default Sidebar;
