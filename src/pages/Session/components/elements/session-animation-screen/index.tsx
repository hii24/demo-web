import { observer } from "mobx-react";
import React from "react";
import {helpers} from "../../../../../utils/helpers/helpres";
import {AnimatedDotsDiagonalLeft} from "../animated-dots/animated-dots-diagonal-left";
import c from './style.module.scss'
import { AnimatedDotsDiagonalRight } from "../animated-dots/animated-dots-diagonal-right";
import {AnimatedDotsDiagonalHorizontal} from "../animated-dots/animated-dots-horizontal";
import {AnimatedDotsDiagonalVertical} from "../animated-dots/animated-dots-vertical";
import {AnimatedDotsRandom} from "../animated-dots/animated-dots-random";
import {SessionSettingsStore} from "../../../../../store/session-settings-store";



const SessionAnimationScreen = () => {
  const background = helpers.getCssValueByVisualBackground(SessionSettingsStore.activeBackground)
  const isDiagonalScreenLeft = SessionSettingsStore.activePath.id === 3

  const stylesValue = isDiagonalScreenLeft ? {
    paddingLeft: `${SessionSettingsStore.activeSize.size}px`,
  } : {
    paddingRight: `${SessionSettingsStore.activeSize.size}px`,
  }


  return (
    <div
      className={c.wrap}
      style={ {
        background: background,
        paddingBottom: `${SessionSettingsStore.activeSize.size}px`,
        ...stylesValue
      }}
    >
     <div className={c.container}>
       {
         SessionSettingsStore.activePath.id === 1 && (
           <AnimatedDotsDiagonalHorizontal />
         )
       }

       {
         SessionSettingsStore.activePath.id === 2 && (
           <AnimatedDotsDiagonalLeft />
         )
       }

       {
         SessionSettingsStore.activePath.id === 3 && (
           <AnimatedDotsDiagonalRight />
         )
       }

       {
         SessionSettingsStore.activePath.id === 4 && (
           <AnimatedDotsDiagonalVertical />
         )
       }

       {
         SessionSettingsStore.activePath.id === 5 && (
           <AnimatedDotsRandom />
         )
       }
     </div>
    </div>
  );
};

export default observer(SessionAnimationScreen);

