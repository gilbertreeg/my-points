/* Generates mock customer and order data with faker.js. */

const faker = require('faker')
const fs = require('fs')

const getPositiveInt = (ceiling) => Math.floor(Math.random() * ceiling) + 1

const createTestData = () => {
  const customers = []
  const orders = []
  const customerOrderMap = {}

  // Create 100 customers
  for (let i = 0; i < 100; i++) {
    const customer = {
      id: faker.datatype.uuid(),
      displayName: faker.name.findName(),
      email: faker.internet.email(),
    }

    customerOrderMap[customer.id] = []

    // Create 1 - 10 orders for customer
    const orderCount = getPositiveInt(10)
    for (let o = 0; o < orderCount; o++) {
      const order = {
        id: faker.datatype.uuid(),
        customerId: customer.id,
        createdOn: faker.date.between(new Date(2021, 0, 0), new Date(2021, 3, 0)), // Data currently is a 3 month span.
      }

      const lineItems = []

      // Create 1 - 3 line items for the order
      const lineCount = getPositiveInt(3)
      for (let l = 0; l < lineCount; l++) {
        const lineItem = {
          id: faker.datatype.uuid(),
          productName: faker.commerce.productName(),
          quantity: getPositiveInt(3),
          unitPrice: Number(faker.commerce.price(1, 50)),
        }

        lineItems.push(lineItem)
      }

      order.lineItems = lineItems

      // Calculate the total of the order.
      order.total = lineItems.reduce((total, x) => (total += x.unitPrice * x.quantity), 0)

      customerOrderMap[customer.id].push(order.id)
      orders.push(order)
    }

    customers.push(customer)
  }

  return { data: { customers, orders, customerOrderMap } }
}

const data = createTestData()

fs.writeFileSync('../next/dataStore/data.json', JSON.stringify(data, null, '\t'))
