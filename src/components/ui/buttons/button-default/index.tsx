import {FC} from "react";
import c from './style.module.scss'

const ButtonClasses = {
  green: c.green,
  light: c.light
}

interface IButtonDefault {
  text: string
  onClick: () => void
  type: keyof typeof ButtonClasses
}

const ButtonDefault: FC<IButtonDefault> = ({text, onClick, type}) => {
  const btnClass = `${c.btn} ${ButtonClasses[type]}`

  return (
    <button className={btnClass} onClick={() => onClick()}>
      {text}
    </button>
  )
}

export {
  ButtonDefault
}