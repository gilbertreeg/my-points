import { useQuery } from '@apollo/client'
import CUSTOMERS from '@gql/customers.graphql'
import { Box, Link as CLink, Table, Thead, Tbody, Tr, Th, Td, Heading } from '@chakra-ui/react'
import Link from 'next/link'

export default function Home() {
  const { data, loading, error } = useQuery(CUSTOMERS)

  if (loading) return <p>loading...</p>

  if (error) return <p>rror: {error}</p>

  return (
    <Box>
      <Heading size="sm">Customers</Heading>
      <Box borderWidth="1px" borderRadius="lg" p="3">
        <Table size="sm">
          <Thead>
            <Tr>
              <Th>Email</Th>
              <Th>Name</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data &&
              data.customers.map((x) => (
                // TODO: Add pagination and load data in batches.
                <Tr key={x.id}>
                  <Td>
                    <Link href="customers/[id]" as={`customers/${x.id}`}>
                      <CLink color="teal.500">{x.email}</CLink>
                    </Link>
                  </Td>
                  <Td>{x.displayName}</Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  )
}
