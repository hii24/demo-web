import React from "react";
import { ReactComponent as AppStoreIcon } from "../../../assets/vectors/navigation/appStore.svg";
import { ReactComponent as ContactIcon } from "../../../assets/vectors/navigation/contact.svg";
import { ReactComponent as FAQIcon } from "../../../assets/vectors/navigation/faq.svg";
import { ReactComponent as GooglePlayIcon } from "../../../assets/vectors/navigation/googlePlay.svg";
import { ReactComponent as TutorialIcon } from "../../../assets/vectors/navigation/tutorial.svg";
import SidebarNavLink from "../SidebarNavigation/SidebarNavLink/SidebarNavLink";
import SidebarSubFooter from "./SidebarSubFooter/SidebarSubFooter";
import styles from "./styles.module.scss";

const Sidebarfooter: React.FC = () => {
  return (
    <div className={styles.bottomNavigation}>
      <ul className={styles.list}>
        <li>
          <SidebarNavLink title="Tutorial" to="/tutorial">
            <TutorialIcon />
          </SidebarNavLink>
        </li>
        <li>
          <SidebarNavLink title="FAQ" to="/faq">
            <FAQIcon />
          </SidebarNavLink>
        </li>
        <li>
          <SidebarNavLink title="Contacts" to="/contacts">
            <ContactIcon />
          </SidebarNavLink>
        </li>
        <li>
          <SidebarNavLink title="iOS app" to="/ios">
            <AppStoreIcon />
          </SidebarNavLink>
        </li>
        <li>
          <SidebarNavLink title="Android app" to="/andriod">
            <GooglePlayIcon />
          </SidebarNavLink>
        </li>
      </ul>
      <SidebarSubFooter />
    </div>
  );
};

export default Sidebarfooter;
