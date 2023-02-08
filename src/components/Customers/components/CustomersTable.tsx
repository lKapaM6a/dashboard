import React, {FC} from 'react'
import {Input} from "../../Input/Input";
import {Pagination} from "../../Pagination/Pagination";
import {SearchIcon} from "../../Icons";
import {tableContent} from "../../../static/tableContent";
import styles from '../customers.module.scss'

interface Props {
}

export const CustomersTable: FC<Props> = props => {
  const {} = props

  return (
    <div className={styles.dashboard__table}>
      <div className={styles.dashboard__tableHead}>
        <div>
          <div className={styles.dashboard__tableTitle}>
            All Customers
          </div>

          <div className={styles.dashboard__tableActivity}>
            Active Members
          </div>
        </div>

        <div className={styles.dashboard__tableSearch}>
          <Input onChange={() => console.log('search')}
                 icon={<SearchIcon/>}
                 placeholder={'Search'}/>
        </div>
      </div>

      <div>
        <table className={`${styles.table} table`}>
          <thead className={`table__header`}>
          <tr className={'table__tr'}>
            <th className={`table__label ${styles.table__name}`}>{'Customer Name'}</th>
            <th className={`table__label ${styles.table__company}`}>{'Company'}</th>
            <th className={`table__label ${styles.table__phone}`}> {'Phone Number'} <i></i></th>
            <th className={`table__label ${styles.table__mail}`}>{('Email')}</th>
            <th className={`table__label ${styles.table__country}`}>{('Country')}</th>
            <th className={`table__label table__labelStatus ${styles.table__status}`}>{('Status')}</th>
          </tr>
          </thead>
          <tbody className={`table__body`}>

          {tableContent.map((item => (
            <tr key={item.id}>
              <td className={`table__cell`}
                  data-label={'Customer Name'}>
                {item.customer}
              </td>
              <td className={`table__cell`}
                  data-label={'Company'}>
                {item.company}
              </td>
              <td className={`table__cell`}
                  data-label={'Phone Number'}>
                {item.phone}
              </td>
              <td className={`table__cell`}
                  data-label={'Email'}>
                {item.mail}
              </td>
              <td className={`table__cell`}
                  data-label={'Country'}>
                {item.country}
              </td>
              <td className={`table__cell`}
                  data-label={'Status'}>
                <div className={`${styles.table__statusTip} ${!item.status ? styles.inactive : ''}`}>
                  {item.status ? ' Active' : 'Inactive'}
                </div>
              </td>
            </tr>
          )))}
          </tbody>
        </table>

        <div className={styles.dashboard__footer}>
          <div className={styles.dashboard__showData}>
            Showing data 1 to 8 of 256K entries
          </div>

          <Pagination/>
        </div>
      </div>
    </div>
  )
}
