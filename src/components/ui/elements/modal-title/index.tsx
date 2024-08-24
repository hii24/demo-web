import c from './style.module.scss'
import {FC} from "react";

interface IModalTitle {
  title: string
}

const ModalTitle: FC<IModalTitle> = ({title}) => {

  return (
    <h2 className={c.title}>{title}</h2>
  )
}

export {
  ModalTitle
}