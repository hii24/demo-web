import c from './style.module.scss'
import {FC, ReactNode} from "react";

interface IIconCuboidWrap {
  children: ReactNode
  size?: number
  onClick?: () => void
}

const IconCuboidWrap: FC<IIconCuboidWrap> = ({children, size, onClick}) => {

  return (
    <div
      className={c.wrap}
      style={{
        height: size ? `${size}px` : "36px",
        width: size ? `${size}px` : "36px",
        cursor: onClick ? "pointer" : "auto"
      }}
      onClick={onClick ? () => onClick() : () => {}}
    >
      {children}
    </div>
  )
}

export {
  IconCuboidWrap
}