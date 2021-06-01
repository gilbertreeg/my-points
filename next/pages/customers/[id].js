import { Box, Link as CLink } from '@chakra-ui/react'
import { useRouter } from 'next/router'
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
      {data?.customer && (
        <>
          THIS IS CUSTOMER {data?.customer?.email}
          <Orders orders={data?.customer?.orders}></Orders>
        </>
      )}
    </Box>
  )
}

export default Customer
