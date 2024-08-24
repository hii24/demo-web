import c from './style.module.scss'
import {FC, MouseEventHandler} from "react";
interface IStateToggle {
  value: boolean
  onChange: (v: boolean) => void
}

const StateToggle: FC<IStateToggle> = ({onChange, value}) => {
  const text = value ? "on" : "off"
  const wrapClass = value ? c.wrapActive : c.wrap

  const submitHandler = (e: any) => {
    onChange(!value)
    e.preventDefault()
    e.stopPropagation()
  }

  return (
    <span className={wrapClass} onClick={submitHandler}>
      {text}
    </span>
  )
}

export {
  StateToggle
}