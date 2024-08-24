import {useState} from "react";
import {ModalWrap} from "../modal-wrap";
import c from './style.module.scss'
import {IconLightWrap} from "../../ui/wrappers/icon-light-wrap";
import listIcon from '../../../assets/images/icons/icon-list.svg'
import {ModalTitle} from "../../ui/elements/modal-title";
import {AreaNoteField} from "../../ui/fields/area-note-field";
import {ButtonDefault} from "../../ui/buttons/button-default";
import {SessionSidebarStore} from "../../../store/session-sidebar-store";

const SessionNotesModal = () => {
  const [noteValue, setNoteValue] = useState('')

  return (
    <ModalWrap closeModal={() => SessionSidebarStore.closeNoteModal()}>
      <div className={c.wrap}>
        <div className={c.topBar}>
          <IconLightWrap>
            <img src={listIcon} alt=""/>
          </IconLightWrap>
          <ModalTitle title="Add notes" />
        </div>
        <AreaNoteField
          placeholder="How is your session going? Is there anything you would like to note?"
          value={noteValue}
          onChange={(v) => setNoteValue(v)}
          noteText="You can find your notes for each session in History section."
        />

        <div className={c.actionsWrap}>
          <div className={c.actions}>
            <ButtonDefault type="light" onClick={() => SessionSidebarStore.closeNoteModal()} text="Cancel" />
            <ButtonDefault type="green" onClick={() => {}} text="Save" />
          </div>
        </div>
      </div>
    </ModalWrap>
  )
}

export {
  SessionNotesModal
}