import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://unipump-contracts-git-main-himmaas-projects.vercel.app/api/graphql", // TODO: Replace with your actual Vercel deployment URL
  cache: new InMemoryCache(),
});

export default client;
