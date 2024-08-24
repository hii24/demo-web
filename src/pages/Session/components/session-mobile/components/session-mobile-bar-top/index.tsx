import { ReactComponent as ChevronIcon } from "../../../../../../assets/vectors/session/controller/chevron.svg";
import { ReactComponent as LinkIcon } from "../../../../../../assets/vectors/session/controller/link.svg";
import styles from "./styles.module.scss";
import ControllerButton from "../../../elements/session-controllers/controller-button";
import {IconCuboidWrap} from "../../../../../../components/ui/wrappers/icon-cuboid-wrap";
import listIcon from '../../../../../../assets/images/icons/icon-list.svg'
import {ClientConnectInfo} from "../../../elements/client-connect-info";
import {observer} from "mobx-react";
import {SessionSettingsStore} from "../../../../../../store/session-settings-store";
import {SessionSidebarStore} from "../../../../../../store/session-sidebar-store";

const SessionMobileBarTop = observer(() => {
  return (
    <div
      className={styles.container}
      style={{
        transform: `translateY(${SessionSidebarStore.isMobileBarOpen ? 0 : -60}px)`
      }}
    >
      <div className={styles.leftWrap}>
        <ControllerButton
          smallPadding={true}
          title="End session"
          onClick={() => alert("End session")}
          icon={<ChevronIcon />}
        />
        <IconCuboidWrap>
          <img src={listIcon} alt=""/>
        </IconCuboidWrap>
      </div>


      <div className={styles.rightWrap}>
        <ClientConnectInfo isConnect={false} />
        <IconCuboidWrap>
          <LinkIcon />
        </IconCuboidWrap>
      </div>

      {
        /*
           <form-backdrop onClick={() => {}}>
            <InviteLinkModal onPressClose={(() => {})} />
          </form-backdrop>
         */
      }
    </div>
  );
})

export default SessionMobileBarTop;
