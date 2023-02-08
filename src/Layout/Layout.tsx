import React, {FC, useState} from 'react'
import {Sidebar} from "../components/Sidebar/Sidebar";
import styles from './layout.module.scss'
import {Header} from "./components/Header/Header";

interface Props {
  children: React.ReactNode;
  sidebar?: boolean
}

export const Layout: FC<Props> = props => {
  const {children, sidebar = true} = props

  const [showSidebar, setShowSidebar] = useState(false)

  console.log(showSidebar)

  return (
    <>
      <div className={styles.page}>
        <Header showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}/>

        <div className={styles.wrapper}>
          {sidebar && <Sidebar showSidebar={showSidebar}
                               setShowSidebar={setShowSidebar}/>}

          <div className={`${styles.content} ${sidebar ? styles.hasSidebar : ''}`}>
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
