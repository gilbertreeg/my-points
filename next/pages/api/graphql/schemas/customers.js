import { gql } from 'apollo-server-micro'

export default gql`
  type Customer {
    id: ID
    displayName: String
    email: String
  }

  extend type Order {
    customer: Customer!
  }

  extend type Query {
    customer(id: ID!): Customer
    customers: [Customer!]!
  }
`
