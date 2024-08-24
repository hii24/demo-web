import { FC } from 'react'
import c from './style.module.scss'

interface ISettingOrbitElement {
  color: string
  size?: number
}

const SettingOrbitElement: FC<ISettingOrbitElement> = ({color, size}) => {

  return (
    <div
      style={{
        backgroundColor: color,
        height: size ?`${size}px`: "35px",
        width: size ? `${size}px` : "35px"
    }}
      className={c.wrap}
    />
  )
}

export {
  SettingOrbitElement
}