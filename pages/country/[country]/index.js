import { fecthgraphql,  URL_API } from "../../../api";
import Home from "../../../imports/containers/Home";

const Country = (props) => {
  return <Home {...props} />;
};

export default Country;
export async function getStaticPaths() {
  const request = await fetch(`${URL_API}/country`);

  const country = await request.json();
  console.log({URL_API, country})
  let paths = [];
  country.forEach((countries) => {
    paths.push({ params: { country: countries.Slug.toLowerCase() } });
  });
  country.forEach((countries) => {
    paths.push({ params: { country: countries.ISO2.toLowerCase() } });
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const data = await fecthgraphql(context.params.country);
  return {
    props: data,
  };
}
