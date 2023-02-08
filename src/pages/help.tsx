import React, {FC} from 'react'
import {Layout} from "../Layout/Layout";

interface Props {
}

export const HelpPage: FC<Props> = props => {
  const {} = props

  return (
    <Layout>
      <div className={'my-5'}>
        Help page
      </div>
    </Layout>
  )
}
