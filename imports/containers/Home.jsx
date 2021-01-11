import Head from "next/head";
import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Badge from "../components/Badge";
import MessageNew from "../components/MessageNew";
import TimeLines from "../components/TimeLines";
import Layout from "../components/Layout";

export default function Home({ country, timelineCountry, changedCountry }) {
  const [state, setCountryUser] = useState();
  const [loading, setLoading] = useState(true);

  const getIpCountryUser = async () =>
    await fetch("https://ipapi.co/json")
      .then((res) => res.json())
      .then((res) => {
        setCountryUser({ country: res.country_name, code: res.country_code });
        document.cookie = `country=${res.country_name}`;
        document.cookie = `code=${res.country_code}`;
        document.cookie = `view=true`;
        setLoading(false);
      });

  useEffect(() => {
    getIpCountryUser();
    changedCountry(country.Summary.Country_Region);
    return () => {};
  }, []);

  return (
    <>
      <Head>
        <title>Casos Covid en {country.Summary.Country_Region}</title>
      </Head>
      <h1>{country.Summary.Country_Region}</h1>
      <div className="row">
        <Badge {...country.Summary} />
        <MessageNew {...country.Summary} title={false} />
      </div>
      <div className="row">
        <TimeLines
          datosTimeLine={timelineCountry}
          country={country.Summary.Country_Region}
        />
      </div>
    </>
  );
}
