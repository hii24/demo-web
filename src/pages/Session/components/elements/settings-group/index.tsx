import ToggleButton from "../../../../../components/ui/buttons/toggle-button";
import React, {FC, ReactNode} from "react";
import c from './style.module.scss'
import {observer} from "mobx-react";


interface ISettingsGroup {
  children: ReactNode
  isActive: boolean
  toggleActive: () => void
  title: string
}

const SettingsGroup: FC<ISettingsGroup> = observer(({children, toggleActive, isActive, title}) => {

  return (
    <div className={c.container}>
      <>
        <ToggleButton
          isActive={isActive}
          toggleActive={toggleActive}
          title={title}
        />

        {isActive && children}
      </>
    </div>
  )
})

export {
  SettingsGroup
}