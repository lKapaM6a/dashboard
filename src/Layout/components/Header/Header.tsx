import React, {FC} from 'react'
import {Link} from "react-router-dom";
import {BurgerIcon, CloseIcon, LogoIcon} from "../../../components/Icons";
import styles from "./header.module.scss";

interface Props {
  showSidebar: boolean
  setShowSidebar: (val: boolean) => void
}

export const Header: FC<Props> = props => {
  const {showSidebar, setShowSidebar} = props

  const showSide = () => {
    setShowSidebar(true)
  }
  const hideSide = () => {
    setShowSidebar(false)
  }

  return (
    <header className={styles.header}>
      <Link to={'/customers'}
            className={styles.header__logo}>
        <LogoIcon/>

        <span className={styles.header__version}>v.01</span>
      </Link>

      <div className={styles.header__burger}>
        {showSidebar ? <CloseIcon onClick={hideSide}/> : <BurgerIcon onClick={showSide}/>}
      </div>
    </header>
  )
}
