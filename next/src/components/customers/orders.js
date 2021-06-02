import { Box } from '@chakra-ui/react'
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

const Orders = ({ orders }) => {
  // TODO: put this in a use effect hook for orders change
  // groups orders by "month-year"
  const ordersByMonth = orders.reduce((result, order) => {
    const date = new Date(order.createdOn)
    const key = `${monthNames[date.getMonth()]}-${date.getFullYear()}`

    if (result[key]) result[key].push(order)
    else result[key] = [order]

    return result
  }, {})

  const orderMonthGroups = []

  for (let [key, value] of Object.entries(ordersByMonth)) {
    orderMonthGroups.push({ title: key, orders: value })
  }

  return (
    <Box>
      {orderMonthGroups.map((props, i) => {
        return <OrdersMonthGroup key={i} {...props} mb="5" />
      })}
    </Box>
  )
}

export default Orders
