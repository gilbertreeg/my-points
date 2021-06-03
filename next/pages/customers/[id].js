import { Box, Link as CLink } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import CUSTOMER from '@gql/customer.graphql'
import { useQuery } from '@apollo/client'
import Orders from '@components/customers/orders'

const Customer = () => {
  const router = useRouter()
  const { id } = router.query

  const { data, loading, error } = useQuery(CUSTOMER, {
    variables: { id },
    skip: !id,
  })

  if (loading) return <p>loading...</p>

  if (error) return <p>Error: {error}</p>

  return (
    <Box>
      {data?.customer && <Orders customer={data?.customer}></Orders>}
      <Link href="/">
        <CLink color="teal.500">All Customers</CLink>
      </Link>
    </Box>
  )
}

export default Customer
