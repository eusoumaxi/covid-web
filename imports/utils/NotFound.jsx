import Head from "next/head";

function NotFounds() {
  return (
    <>
      <Head>
        <title>Ha ocurrido un error</title>
      </Head>

      <div className="container">
        <div className="error-container">
          <div className="error-info">
            <h1>404</h1>
            <p>
              Parece que la página que estás buscando ya no existe.{" "}
              <a href="/">Pagina principal</a>
            </p>
          </div>
          <div className="error-image" />
        </div>
      </div>
    </>
  );
}

export default NotFounds;
