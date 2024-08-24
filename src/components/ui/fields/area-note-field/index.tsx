import c from './style.module.scss'
import {FC} from "react";

interface IAreaNoteField {
  value: string
  onChange: (v: string) => void
  maxCount?: number
  placeholder?: string
  noteText?: string
}

const AreaNoteField: FC<IAreaNoteField> = ({maxCount, onChange, value, placeholder, noteText}) =>  {
  const maxCountVal = maxCount ? maxCount : 500

  const onSubmit = (newVal: string) => {
    if (newVal.length > maxCountVal) return
    onChange(newVal)
  }

  return (
    <div>
      <textarea
        className={c.area}
        name={Math.random().toString()}
        maxLength={maxCountVal}
        placeholder={placeholder}
        onChange={(e) => onSubmit(e.target.value)}
       >
      </textarea>
      <div className={c.valueLength}>{value.length}/{maxCountVal} characters</div>
      {noteText && <p className={c.noteText}>{noteText}</p>}
    </div>
  )
}

export {
  AreaNoteField
}