import { ApolloServer } from 'apollo-server-micro'
import customerSchema from './schema/customer'
import customerResolvers from './resolvers/customer'
import data from '../dataStore/data.json'

const context = { db: data.data }

const apolloServer = new ApolloServer({
  typeDefs: customerSchema,
  resolvers: customerResolvers,
  context,
})

export const config = {
  api: {
    bodyParser: false,
  },
}

export default apolloServer.createHandler({ path: '/api/graphql' })
