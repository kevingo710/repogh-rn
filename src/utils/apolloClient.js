import { ApolloClient, InMemoryCache } from '@apollo/client';

// Initialize Apollo Client
const apolloClient = new ApolloClient({
  uri: 'http://192.168.200.110:4000/graphql',
  cache: new InMemoryCache(),
});

export default apolloClient;
