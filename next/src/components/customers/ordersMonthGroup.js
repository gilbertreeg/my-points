import { Box, Table, Thead, Tbody, Tfoot, Tr, Th, Td, Heading, Center } from '@chakra-ui/react'
import { formatCurrency, numberWithCommas } from '@utils/numberFormats'

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
                <Td isNumeric>{formatCurrency(order.total)}</Td>
                <Td isNumeric>{numberWithCommas(order.points)}</Td>
                <Td>{order.createdOn}</Td>
              </Tr>
            )
          })}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th isNumeric>{formatCurrency(dollarTotal)}</Th>
            <Th isNumeric>{numberWithCommas(pointTotal)}</Th>
            <Th>Month Totals</Th>
          </Tr>
        </Tfoot>
      </Table>
    </Box>
  )
}

export default OrdersMonthGroup
