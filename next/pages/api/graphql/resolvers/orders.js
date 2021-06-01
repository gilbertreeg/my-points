export default {
  Query: {
    order: (_, { id }, { db }) => db.orders.find((o) => o.id === id),
    orders: (_, __, { db }) => db.orders,
  },
  Customer: {
    orders: ({ id }, __, { db }) => {
      const orderIds = db.customerOrderMap[id]

      return db.orders.filter((o) => orderIds.includes(o.id))
    },
  },
}
