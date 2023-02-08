import React, {FC} from 'react'
import {NavLink} from "react-router-dom";
import {ChevronRightIcon} from "../../Icons";
import styles from '../sidebar.module.scss'

interface Props {
  items: any
}

export const SidebarMenu: FC<Props> = props => {
  const {items} = props

  return (
    <div className={styles.sidebar__menu}>
      {items.map((item: any) => (
        <NavLink key={item.id}
                 to={item.url}
                 className={styles.sidebar__menuItem}
        >
          <div className={styles.sidebar__menuText}>
            <i className={styles.sidebar__menuIcon}>
              {item.icon}
            </i>

            {item.label}
          </div>

          <ChevronRightIcon/>
        </NavLink>
      ))}
    </div>
  )
}
