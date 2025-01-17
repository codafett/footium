import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://live.api.footium.club/api/graphql',  
  cache: new InMemoryCache()
});

export default client;