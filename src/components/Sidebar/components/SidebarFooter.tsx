import React, {FC} from 'react'
import {user} from "../../../static/user";
import styles from '../sidebar.module.scss'

interface Props {

}

export const SidebarFooter: FC<Props> = props => {
  const {} = props

  return (
    <div className={styles.sidebar__footer}>
      <div className={styles.sidebar__footerAvatar}>
        {user.avatar !== '' ? <img src={user.avatar} alt={user.name}/> : user.name.slice(0, 1)}
      </div>

      <div>
        <div className={styles.sidebar__footerName}>
          {user.name}
        </div>

        <div className={styles.sidebar__footerPosition}>
          {user.position}
        </div>
      </div>
    </div>
  )
}
