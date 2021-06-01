import { Box } from '@chakra-ui/react'

const Orders = ({ orders }) => {
  return (
    <Box>
      {orders.map((order) => (
        <Box key={order.id}>{order.total}</Box>
      ))}
    </Box>
  )
}

export default Orders
