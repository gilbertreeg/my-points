import { gql } from 'apollo-server-micro'

export default gql`
  type Customer {
    id: ID
    displayName: String
    email: String
    orders: [Order]
  }

  type Order {
    id: ID
    customer: Customer!
    lineItems: [OrderLineItem]
    createdOn: String
    total: Float
  }

  type OrderLineItem {
    id: ID
    order: Order
    productName: String
    unitPrice: Float
    quantity: Int
  }

  type Query {
    customers: [Customer]
  }
`
