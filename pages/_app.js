import { useState } from "react";
import Layout from "../imports/components/Layout";
import 'bootstrap/dist/css/bootstrap.min.css'
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [global, setGlobal] = useState({
    country: "Colombia",
    searching: null,
  });
  /**
   * 
   * @param {String} country  changed country state global
   */
  const changedCountry = (country) => setGlobal((prev) =>({...prev, country }))
  return (
    <Layout {...global} setChanged={setGlobal}>
      <Component {...pageProps} global={global} changedCountry={changedCountry} />
    </Layout>
  );
}

export default MyApp;
