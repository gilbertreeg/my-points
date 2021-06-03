import { ApolloServer } from 'apollo-server-micro'
import { customerResolvers, orderResolvers } from './resolvers'
import data from '../../../data.json'
import { customerSchema, orderSchema } from './schemas'
import { merge } from 'lodash'

const context = { db: data.data }

const apolloServer = new ApolloServer({
  typeDefs: [customerSchema, orderSchema],
  resolvers: merge(customerResolvers, orderResolvers),
  context,
})

export const config = {
  api: {
    bodyParser: false,
  },
}

export default apolloServer.createHandler({ path: '/api/graphql' })
