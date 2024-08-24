import {useState} from "react";
import {ModalWrap} from "../modal-wrap";
import c from './style.module.scss'
import {IconLightWrap} from "../../ui/wrappers/icon-light-wrap";
import alertIcon from '../../../assets/images/icons/icon-alert.svg'
import {ModalTitle} from "../../ui/elements/modal-title";
import {AreaNoteField} from "../../ui/fields/area-note-field";
import {ButtonDefault} from "../../ui/buttons/button-default";
import {SessionSidebarStore} from "../../../store/session-sidebar-store";

const SessionEndModal = () => {
  const [noteValue, setNoteValue] = useState('')

  return (
    <ModalWrap closeModal={() => SessionSidebarStore.closeEndSessionModal()}>
      <div className={c.wrap}>
        <div className={c.topBar}>
          <IconLightWrap>
            <img src={alertIcon} alt=""/>
          </IconLightWrap>
          <div className={c.titleWrap}>
            <ModalTitle title="End session" />
            <p className={c.text}>Are you sure you want to finish the session?</p>
          </div>
        </div>
        <AreaNoteField
          placeholder="How is your session going? Is there anything you would like to note?"
          value={noteValue}
          onChange={(v) => setNoteValue(v)}
          noteText="You can find your notes for each session in History section."
        />

        <div className={c.actionsWrap}>
          <div className={c.actions}>
            <ButtonDefault type="light" onClick={() => SessionSidebarStore.closeEndSessionModal()} text="Cancel" />
            <ButtonDefault type="green" onClick={() => {}} text="Finish Session" />
          </div>
        </div>
      </div>
    </ModalWrap>
  )
}

export {
  SessionEndModal
}