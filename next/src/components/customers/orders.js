import { Box, Flex, Spacer, Heading } from '@chakra-ui/react'
import OrdersMonthGroup from './ordersMonthGroup'

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const Orders = ({ customer }) => {
  let totalCustomerPoints = customer.orders.reduce((sum, o) => sum + o.points, 0)

  // groups orders by "month-year" and sum up total points
  const ordersByMonth = customer.orders.reduce((result, order) => {
    const date = new Date(order.createdOn)
    const key = `${monthNames[date.getMonth()]}-${date.getFullYear()}`

    if (result[key]) result[key].push(order)
    else result[key] = [order]

    return result
  }, {})

  const orderMonthGroups = []

  for (let [key, value] of Object.entries(ordersByMonth)) {
    // Calculate the point total and order total per month
    const [pointTotal, dollarTotal] = value.reduce(
      ([pointSum, dollarSum], order) => [(pointSum += order.points), (dollarSum += order.total)],
      [0, 0]
    )

    orderMonthGroups.push({ title: key, orders: value, pointTotal, dollarTotal })
  }

  return (
    <Box>
      <Flex>
        <Heading size="sm">{customer.displayName}'s Orders</Heading>
        <Spacer />
        <Heading size="sm">Points Earned: {totalCustomerPoints}</Heading>
      </Flex>
      <Box borderWidth="1px" borderRadius="lg" p="3">
        {orderMonthGroups.map((props, i) => {
          return <OrdersMonthGroup key={i} {...props} mt={i !== 0 ? 5 : 0} />
        })}
      </Box>
    </Box>
  )
}

export default Orders
