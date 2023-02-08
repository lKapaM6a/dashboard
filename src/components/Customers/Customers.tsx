import React, {FC} from 'react'
import {CustomersTable} from "./components/CustomersTable";
import styles from './customers.module.scss'

interface Props {
  title?: string
}

export const Customers: FC<Props> = props => {
  const {title} = props

  return (
    <div className={styles.dashboard}>
      {title && <h1 className={styles.dashboard__title}>{title}</h1>}

      <CustomersTable/>
    </div>
  )
}
