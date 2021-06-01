import { useQuery } from '@apollo/client'
import CUSTOMERS from './gql/customers.graphql'

export default function Home() {
  const { data, loading, error } = useQuery(CUSTOMERS)

  // make sure all data is loaded
  if (loading) {
    return <p>loading...</p>
  }

  // check for errors
  if (error) {
    return <p>Error</p>
  }

  return <div>TEST</div>
}
