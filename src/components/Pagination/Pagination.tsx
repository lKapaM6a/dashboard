import React, {FC} from 'react'
import styles from './pagination.module.scss'

interface Props {
}

export const Pagination: FC<Props> = props => {
  const {} = props

  return (
    <div className={styles.pagination}>
      <div className={styles.pagination__item}>
        {'<'}
      </div>

      <div className={`${styles.pagination__item} ${styles.active}`}>
        1
      </div>

      <div className={styles.pagination__item}>
        2
      </div>

      <div className={styles.pagination__item}>
        3
      </div>

      <div className={styles.pagination__item}>
        4
      </div>

      <div className={styles.pagination__more}>
        ...
      </div>

      <div className={styles.pagination__item}>
        40
      </div>

      <div className={styles.pagination__item}>
        {'>'}
      </div>
    </div>
  )
}
