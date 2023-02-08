import React, {FC} from 'react'
import {sidebarMenuItems} from "../../static/sidebarMenuItems";
import {SidebarHead} from "./components/SidebarHead";
import {SidebarMenu} from "./components/SidebarMenu";
import {SidebarFooter} from "./components/SidebarFooter";
import styles from './sidebar.module.scss'

interface Props {
  showSidebar: boolean
  setShowSidebar: (val: boolean) => void
}

export const Sidebar: FC<Props> = props => {
  const {showSidebar, setShowSidebar} = props

  return (
    <div className={`${styles.sidebar} ${showSidebar ? styles.active : ''}`}>
      <div className={styles.sidebar__wrapper}>
        <SidebarHead showSidebar={showSidebar}
                     setShowSidebar={setShowSidebar}/>
        <SidebarMenu items={sidebarMenuItems}/>
      </div>
      <SidebarFooter/>
    </div>
  )
}
