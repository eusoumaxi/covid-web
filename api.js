import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export const URL_API =
  process.env.NODE_ENV !== "production"
    ? "https://api.datoscovid.org"
    : "http://localhost:3001";

export const client = new ApolloClient({
  uri: `${URL_API}/graphql`,
  cache: new InMemoryCache(),
});

export const fecthgraphql = async (country) => {
  const { data } = await client.query({
    query: gql`
    {
      country(country: "${country}") {
        Summary {
          Country_Region
          Slug
          Last_Update
          Confirmed
          Deaths
          Recovered
          NewConfirmed
          NewDeaths
          NewRecovered
        }
      }
      timelineCountry(country: "${country}") {
        Confirmed
        Deaths
        Recovered
        Date
      }
    }
  `,
  });
  return data;
};
export const fecthSearching = async () => {
  const { data } = await client.query({
    query: gql`
      {
        summary {
          countries {
            Country_Region
            Slug
            Confirmed
            Recovered
            Deaths
            Last_Update
            NewConfirmed
            NewDeaths
            NewRecovered
          }
        }
      }
    `,
  });
  return data;
};
