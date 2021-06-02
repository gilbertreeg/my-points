import { Box, Table, Thead, Tbody, Tfoot, Tr, Th, Td, Heading } from '@chakra-ui/react'

const OrdersMonthGroup = ({ orders, title, ...props }) => {
  return (
    <Box width="30vw" {...props}>
      <Heading as="h4" size="md">
        {title}
      </Heading>
      <Table size="sm">
        <Thead>
          <Tr>
            <Th isNumeric>Order Total</Th>
            <Th isNumeric>Points Earned</Th>
            <Th>Date</Th>
          </Tr>
        </Thead>
        <Tbody>
          {orders.map((order) => {
            return (
              <Tr key={order.id}>
                <Td isNumeric>{order.total}</Td>
                <Td isNumeric>{order.points}</Td>
                <Td>{order.createdOn}</Td>
              </Tr>
            )
          })}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th isNumeric>Order Total...</Th>
            <Th isNumeric>Point Total...</Th>
            <Th></Th>
          </Tr>
        </Tfoot>
      </Table>
    </Box>
  )
}

export default OrdersMonthGroup
