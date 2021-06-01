export default {
  Query: {
    customer: (_, { id }, { db }) => db.customers.find((c) => c.id === id),
    customers: (_, __, { db }) => db.customers,
  },
  Order: {
    customer: ({ customerId }, __, { db }) => db.customers.find((c) => c.id === customerId),
  },
}
