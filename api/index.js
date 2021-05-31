const { ApolloServer, gql } = require('apollo-server')
const data = require('./dataStore/data.json')

const resolvers = {
  Query: {
    customers: () => data.data,
  },
}

const typeDefs = gql`
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
const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
