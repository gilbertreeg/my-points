import calculatePoints from '@logic/calculatePoints'

export default {
  Query: {
    order: (_, { id }, { db }) => db.orders.find((o) => o.id === id),
    orders: (_, __, { db }) => db.orders,
  },
  Order: {
    points: ({ total }) => calculatePoints(total),
  },
  Customer: {
    orders: ({ id }, _, { db }) => {
      const orderIds = db.customerOrderMap[id]

      return db.orders.filter((o) => orderIds.includes(o.id))
    },
  },
}
