export default {
  Query: {
    customers: (_, __, { db }) => db.customers,
  },
}
