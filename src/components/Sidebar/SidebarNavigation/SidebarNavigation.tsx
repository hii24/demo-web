import React from "react";
import { ReactComponent as ClientIcon } from "../../../assets/vectors/navigation/clients.svg";
import { ReactComponent as HistoryIcon } from "../../../assets/vectors/navigation/history.svg";
import { ReactComponent as ResourcesIcon } from "../../../assets/vectors/navigation/resources.svg";
import { ReactComponent as StartIcon } from "../../../assets/vectors/navigation/startSession.svg";
import { Paths } from "../../../types/path.type";
import { isClient } from "../../../utils/default";
import DropdownButton from "../DropdownButton/DropdownButton";
import SidebarNavLink from "./SidebarNavLink/SidebarNavLink";
import styles from "./styles.module.scss";

const SidebarNavigation: React.FC = () => {
  return (
    <div className={styles.topNavigation}>
      <ul className={styles.list}>
        <li>
          <SidebarNavLink title="Start session" to={Paths.STARTSESSION}>
            <StartIcon />
          </SidebarNavLink>
        </li>
        <li>
          {isClient ? (
            <DropdownButton title="Resources">
              <ResourcesIcon />
            </DropdownButton>
          ) : (
            <SidebarNavLink title="Clients" to={Paths.CLIENTS}>
              <ClientIcon />
            </SidebarNavLink>
          )}
        </li>
        <li>
          <SidebarNavLink title="History" to={Paths.HISTORY}>
            <HistoryIcon />
          </SidebarNavLink>
        </li>
      </ul>
    </div>
  );
};

export default SidebarNavigation;
