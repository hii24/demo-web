import c from './style.module.scss'
import {FC, ReactNode} from "react";

interface IIconLightWrap {
  children: ReactNode
}

const IconLightWrap: FC<IIconLightWrap> = ({children}) => {

  return (
    <div className={c.wrap}>
      {children}
    </div>
  )
}

export {
  IconLightWrap
}