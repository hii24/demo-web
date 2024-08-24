import { FC } from 'react'
import c from './style.module.scss'
import {IVisualBackground} from "../../../../../configs/visual-settings";
import {helpers} from "../../../../../utils/helpers/helpres";

interface ISettingBackgroundElement {
  item: IVisualBackground
}

const SettingBackgroundElement: FC<ISettingBackgroundElement> = ({item}) => {

  const backgroundValue = helpers.getCssValueByVisualBackground(item)

  return (
    <div
      style={{
        background: backgroundValue,
    }}
      className={c.wrap}
    />
  )
}

export {
  SettingBackgroundElement
}