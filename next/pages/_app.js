import '../styles/globals.css'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { ApolloProvider } from '@apollo/client/react'
import { ChakraProvider, Container } from '@chakra-ui/react'

const client = new ApolloClient({
  uri: 'http://localhost:3000/api/graphql',
  cache: new InMemoryCache(),
})

function MyPointsApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <ApolloProvider client={client}>
        <Container maxW="container.sm" centerContent pt="3">
          <Component {...pageProps} />
        </Container>
      </ApolloProvider>
    </ChakraProvider>
  )
}

export default MyPointsApp
