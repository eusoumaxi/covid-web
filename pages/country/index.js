import Link from "next/link";
import { useRouter } from "next/router";
import { fecthSearching } from "../../api";

const Searching = (props) => {
  const { query } = useRouter();
  const {
    countries,
    global: { searching },
  } = props;
  const countryGet = searching || query.search || ""
  return (
    <>
      <h3>Resultado de Busqueda: {countryGet}</h3>
      {countries
        .filter((i) =>
          i.Country_Region.toLowerCase().includes(countryGet.toLowerCase())
        )
        .map((Summary) => (
          <div className="col-xl" key={Summary.Country_Region}>
            <div className="card">
              <div className="card-body">
                <p>
                  <span className="card-title">{Summary.Country_Region}, </span>
                  {Summary.Confirmed === 0
                    ? "no ha reportado ninguna cifra."
                    : Summary.NewConfirmed === 0
                    ? ` no  ha reportado
                    cifras nuevas y aun continua con ${Summary.Confirmed} casos confirmados.`
                    : `reporto que la cifra
                      de contagios ascendió a ${Summary.Confirmed} con ${
                        Summary.NewConfirmed
                      }  casos nuevos confirmados. ${
                        Summary.Deaths === 0
                          ? `${
                              Summary.Confirmed === 0
                                ? ""
                                : `Ademas se ha recuperados ${Summary.Recovered} `
                            } `
                          : `  Además, informó que las víctimas mortales ${
                              Summary.NewDeaths === 0 ? "sigue siendo" : "son"
                            }  ${Summary.Deaths}  ${
                              Summary.NewDeaths === 0
                                ? ""
                                : `(+ ${Summary.NewDeaths} nuevos casos mortal)`
                            } ${
                              Summary.Recovered === 0
                                ? ""
                                : `${
                                    Summary.NewRecovered === 0
                                      ? `y todavia siguen los ${Summary.Recovered} recuperados.`
                                      : `y que ya se ha recuperado ${Summary.NewRecovered} casos, sumando a los ${Summary.Recovered}  casos recuperados`
                                  } `
                            } `
                      }
                     `}
                </p>

                <Link href={`/country/${Summary.Slug}`}>
                  <a href={`/country/${Summary.Slug}`} type="button" className="btn btn-primary btn-xs">
                    Ver mas detalles de {Summary.Country_Region}
                  </a>
                </Link>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default Searching;

export async function getStaticProps() {
  const data = await fecthSearching();
  return {
    props: data.summary,
  };
}
