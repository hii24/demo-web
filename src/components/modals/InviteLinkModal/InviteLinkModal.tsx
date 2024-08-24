import copy from "copy-to-clipboard";
import { observer } from "mobx-react";
import React, { useState } from "react";
import { ReactComponent as CheckIcon } from "../../../assets/vectors/invite/check.svg";
import { ReactComponent as CopyIcon } from "../../../assets/vectors/invite/copy.svg";
import { ReactComponent as FeaturedIcon } from "../../../assets/vectors/invite/featured.svg";
import { ReactComponent as CloseIcon } from "../../../assets/vectors/x-close.svg";
import authStore from "../../../store/store";
import FillButton from "../../ui/buttons/fill-button";
import CopiedButton from "./CopiedButton/CopiedButton";
import SelectClientInput from "./SelectClientInput/SelectClientInput";
import ShareLinkInput from "./ShareLinkInput/ShareLinkInput";
import styles from "./styles.module.scss";

interface Props {
  onPressClose: () => void;
  id: string
}

const InviteLinkModal: React.FC<Props> = (props) => {
  const [url] = useState<string>("http://localhost:3000/session-join?id=" + props.id);
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const { isAuthenticated, userInfo } = authStore;

  const onClickCopy = () => {
    copy(url, { message: "Click to copy" });
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };

  return (
    <div className={styles.modalContainer}>
      <div className={styles.header}>
        <FeaturedIcon />
        <div className={styles.headerTitleContainer}>
          <span className={styles.title}>Invite link</span>
          <span className={styles.subTitle}>
            Share the link to invite a client
          </span>
        </div>
        <button className={styles.closeButton} onClick={props.onPressClose}>
          <CloseIcon />
        </button>
      </div>
      {isAuthenticated && userInfo?.user_type === 1 && <SelectClientInput />}
      <ShareLinkInput url={url} />
      {!showMessage ? (
        <FillButton buttonText="Copy" onClick={onClickCopy} isCopyButton={true}>
          <CopyIcon />
        </FillButton>
      ) : (
        <CopiedButton text="Copied">
          <CheckIcon />
        </CopiedButton>
      )}
    </div>
  );
};

export default observer(InviteLinkModal);
