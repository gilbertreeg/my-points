const faker = require('faker')
const fs = require('fs')

const getPositiveInt = (ceiling) => Math.floor(Math.random() * ceiling) + 1

const createStudents = () => {
  const customers = []

  for (let i = 0; i < 100; i++) {
    const customer = {
      id: faker.datatype.uuid(),
      displayName: faker.name.findName(),
      email: faker.internet.email(),
    }

    const orders = []
    const orderCount = getPositiveInt(10)
    for (let o = 0; o < orderCount; o++) {
      const order = {
        id: faker.datatype.uuid(),
        createdOn: faker.date.between(new Date(2021, 0, 0), new Date(2021, 3, 0)),
      }

      const lineItems = []
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
      order.total = lineItems.reduce((total, x) => (total += x.unitPrice * x.quantity), 0)
      orders.push(order)
    }

    customer.orders = orders
    customers.push(customer)
  }

  return { data: customers }
}

const customerData = createStudents()

fs.writeFileSync('../api/dataStore/data.json', JSON.stringify(customerData, null, '\t'))
