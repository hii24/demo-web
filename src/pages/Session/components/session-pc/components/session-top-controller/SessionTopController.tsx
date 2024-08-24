import { useState } from "react";
import { ReactComponent as ChevronIcon } from "../../../../../../assets/vectors/session/controller/chevron.svg";
import { ReactComponent as LinkIcon } from "../../../../../../assets/vectors/session/controller/link.svg";
import FormBackdrop from "../../../../../../components/ui/wrappers/form-backdrop";
import InviteLinkModal from "../../../../../../components/modals/InviteLinkModal/InviteLinkModal";
import ControllerButton from "../../../elements/session-controllers/controller-button";
import styles from "./styles.module.scss";
import {useSearchParams} from "react-router-dom";
import listIcon from "../../../../../../assets/images/icons/icon-list.svg";
import {IconCuboidWrap} from "../../../../../../components/ui/wrappers/icon-cuboid-wrap";
import {SessionSidebarStore} from "../../../../../../store/session-sidebar-store";

const SessionTopController: React.FC = () => {
  const [searchParams] = useSearchParams()
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <ControllerButton
          title="End session"
          onClick={() => SessionSidebarStore.openEndSessionModal()}
          icon={<ChevronIcon />}
        />
        <IconCuboidWrap
          size={46}
          onClick={() => SessionSidebarStore.openNoteModal()}
        >
          <img src={listIcon} alt=""/>
        </IconCuboidWrap>
      </div>


      <ControllerButton
        title="Session link"
        onClick={() => openModal()}
        icon={<LinkIcon />}
      />

      {isOpenModal && (
        <FormBackdrop onClick={() => {}}>
          <InviteLinkModal id={searchParams.get("id")!} onPressClose={closeModal} />
        </FormBackdrop>
      )}
    </div>
  );
};

export default SessionTopController;
