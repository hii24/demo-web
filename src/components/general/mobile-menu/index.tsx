import c from './style.module.scss'
import React, {useState} from "react";
import {UNAUTHORIZED_MENU} from "../../../const/unauthorized-menu";
import {useNavigate} from "react-router-dom";


const MobileMenu = () => {
  const [isActive, setIsActive] = useState(false)
  const btnClass = isActive ? `${c.btn} ${c.btnActive}` : c.btn
  const listClass = isActive ? `${c.list} ${c.listActive}` : c.list
  const navigate = useNavigate()

  const toggleActive = () => setIsActive(!isActive)

  return (
    <div>
      <div className={btnClass} onClick={toggleActive}>
        <span />
        <span />
        <span />
      </div>

      <ul className={listClass}>
        {
          UNAUTHORIZED_MENU.map(item => (
            <span key={Math.random()} onClick={() => navigate(item.linK)}>
            <a href="http://localhost:3000" className={c.link}>
              {item.name}
            </a>
          </span>
          ))
        }
      </ul>
    </div>
  )
}

export {
  MobileMenu
}