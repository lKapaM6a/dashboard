import React, {FC, ReactNode} from 'react'
import styles from './input.module.scss'

interface Props {
  placeholder: string
  icon?: ReactNode
  onChange?: any
}

export const Input: FC<Props> = props => {
  const {placeholder, onChange, icon} = props

  return (
    <div className={styles.input}>
      {icon && icon}
      <input className={icon ? styles.hasIcon : ''} onChange={onChange} type="text" placeholder={placeholder}/>
    </div>
  )
}
