import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { onError } from "@apollo/client/link/error";

// Log any GraphQL errors or network error that occurred
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );
  if (networkError) console.error(`[Network error]: ${networkError}`);
});

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_URL || "https://unipump-contracts.onrender.com/graphql",
});

const client = new ApolloClient({
  link: errorLink.concat(httpLink),
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
      fetchPolicy: 'network-only', // Don't cache for now to rule out caching issues
      errorPolicy: 'all',
    },
  },
});

export default client;
