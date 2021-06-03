import { Box, Table, Thead, Tbody, Tfoot, Tr, Th, Td, Heading, Center } from '@chakra-ui/react'

const OrdersMonthGroup = ({ orders, title, dollarTotal, pointTotal, ...props }) => {
  return (
    <Box {...props}>
      <Center>
        <Heading size="sm">{title}</Heading>
      </Center>
      <Table size="sm" mt="2">
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
            <Th isNumeric>{dollarTotal}</Th>
            <Th isNumeric>{pointTotal}</Th>
            <Th></Th>
          </Tr>
        </Tfoot>
      </Table>
    </Box>
  )
}

export default OrdersMonthGroup
