import {FC, ReactNode} from "react";
import c from './style.module.scss'
import closeIcon from '../../../assets/images/icons/icon-close.svg'
import {IconClose} from "../../ui/icons/icon-close";

interface IModalWrap {
  closeModal: () => void
  children: ReactNode
}

const ModalWrap: FC<IModalWrap> = ({closeModal, children}) => {

  return (
    <div className={c.wrap}>
      <div className={c.container}>
        <span className={c.close}>
          <IconClose onClick={closeModal} color='dark' />
        </span>
        {children}
      </div>
    </div>
  )
}

export {
  ModalWrap
}