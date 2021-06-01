import { gql } from 'apollo-server-micro'

export default gql`
  type Order {
    id: ID
    lineItems: [OrderLineItem]
    createdOn: String
    total: Float
    points: Float # TODO: Should this be a float or int?
  }

  type OrderLineItem {
    id: ID
    order: Order
    productName: String
    unitPrice: Float
    quantity: Int
  }

  extend type Customer {
    orders: [Order]
  }

  type Query {
    order(id: ID!): Order
    orders: [Order]
  }
`
