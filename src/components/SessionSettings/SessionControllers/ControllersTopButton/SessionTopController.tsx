import { useState } from "react";
import { ReactComponent as ChevronIcon } from "../../../../assets/vectors/session/controller/chevron.svg";
import { ReactComponent as LinkIcon } from "../../../../assets/vectors/session/controller/link.svg";
import FormBackdrop from "../../../Backdrop/FormBackdrop/FormBackdrop";
import InviteLinkModal from "../../../Modal/InviteLinkModal/InviteLinkModal";
import ControllerButton from "../ControllerButton/ControllerButton";
import styles from "./styles.module.scss";

const SessionTopController: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <div className={styles.container}>
      <ControllerButton
        title="End session"
        onClick={() => alert("End session")}
      >
        <ChevronIcon />
      </ControllerButton>
      <ControllerButton title="Session link" onClick={() => openModal()}>
        <LinkIcon />
      </ControllerButton>
      {isOpenModal && (
        <FormBackdrop onClick={() => {}}>
          <InviteLinkModal onPressClose={closeModal} />
        </FormBackdrop>
      )}
    </div>
  );
};

export default SessionTopController;
