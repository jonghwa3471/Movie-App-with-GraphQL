import { HttpLink } from "@apollo/client";
import { ApolloClient, gql, InMemoryCache } from "@apollo/client";

const cache = new InMemoryCache();
const client = new ApolloClient({
  link: new HttpLink({
    uri: "http://localhost:4000/",
  }),
  cache,
});

client
  .query({
    query: gql`
      {
        allMovies {
          title
        }
      }
    `,
  })
  .then((data) => console.log(data));

export default client;
