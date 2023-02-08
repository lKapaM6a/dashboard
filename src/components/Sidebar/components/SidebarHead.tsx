import React, {FC} from 'react'
import {Link} from "react-router-dom";
import {CloseIcon, LogoIcon} from "../../Icons";
import styles from '../sidebar.module.scss'

interface Props {
  showSidebar: boolean
  setShowSidebar: (val: boolean) => void
}

export const SidebarHead: FC<Props> = props => {
  const {showSidebar, setShowSidebar} = props

  const hideSide = () => {
    setShowSidebar(false)
  }

  return (
    <div className={styles.sidebar__head}>
      <Link to={'/customers'}
            className={styles.sidebar__logo}>
        <LogoIcon/>

        <span className={styles.sidebar__version}>v.01</span>
      </Link>

      {showSidebar && (
        <div className={styles.sidebar__close}>
          <CloseIcon onClick={hideSide}/>
        </div>
      )}
    </div>
  )
}
