import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new  ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4nm18f90emx01xoa81w3zux/master',
  cache: new InMemoryCache
})