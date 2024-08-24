import {FC} from "react";

interface IIconClose {
  color?: "white" | "dark"
  onClick: () => void
}

const IconClose: FC<IIconClose> = ({color, onClick}) => {
  const colorNewColor = color === 'dark' ?  "#98A2B3" : "white"

  return (
    <span style={{cursor: "pointer"}} onClick={() => onClick()}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 6L6 18M6 6L18 18" stroke={colorNewColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span>
  )
}

export {
  IconClose
}