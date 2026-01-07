import { HttpLink } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { LocalState } from "@apollo/client/local-state";

const cache = new InMemoryCache();
const client = new ApolloClient({
  link: new HttpLink({
    uri: "http://localhost:4000/",
  }),
  cache,
  localState: new LocalState(),
});

export default client;
