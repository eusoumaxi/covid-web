import Head from "next/head";
import Nav from "./Nav";

const Layout = ({ children, country, setChanged }) => {
  return (
    <>
      <Head>
        <title>{country}</title>
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900&amp;display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link
          href="/logo-192.png"
          rel="icon"
          type="image/png"
          sizes="192x192"
        />
        <link
          href="/logo-512.png"
          rel="icon"
          type="image/png"
          sizes="512x512"
        />
        <link rel="apple-touch-icon" href="/favicon.ico"></link>
        <meta name="theme-color" content="#333333" />
      </Head>
      <Nav setChanged={setChanged} country={country} />
      <div className="container">{children}</div>
    </>
  );
};
export default Layout;
