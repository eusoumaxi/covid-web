import Home from "../imports/containers/Home";
import { fecthgraphql } from "../api";

const App = (props) => {
  return (
    <>
      <Home {...props} />
    </>
  );
};
export async function getStaticProps(context) {
  const data = await fecthgraphql("co");
  return {
    props: data,
  };
}


export default App;
