import React, {FC} from 'react'
import {Layout} from "../Layout/Layout";
import {Customers} from "../components/Customers/Customers";
import {user} from "../static/user";

interface Props {
}

export const CustomersPage: FC<Props> = props => {
  const {} = props

  return (
    <Layout>
      <Customers title={`Hello ${user.name} 👋🏼,`}/>
    </Layout>
  )
}
