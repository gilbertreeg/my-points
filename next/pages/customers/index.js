import { useQuery } from '@apollo/client'
import CUSTOMERS from '@gql/customers.graphql'
import { Box, Link as CLink } from '@chakra-ui/react'
import Link from 'next/link'

export default function Home() {
  const { data, loading, error } = useQuery(CUSTOMERS)

  if (loading) return <p>loading...</p>

  if (error) return <p>rror: {error}</p>

  return (
    <Box>
      {data &&
        data.customers.map((x) => (
          <Box key={x.id}>
            <Link href="customers/[id]" as={`customers/${x.id}`}>
              <CLink color="teal.500">{x.email}</CLink>
            </Link>
          </Box>
        ))}
    </Box>
  )
}
