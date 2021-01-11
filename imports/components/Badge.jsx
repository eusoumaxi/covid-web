import moment from "moment";

const Badge = ({ Last_Update, Confirmed, Deaths, Recovered }) => {
  return (
    <>
      <div className="col-md-4">
        <div className="card stat-card">
          <div className="card-body">
            <h5 className="card-title">Casos Confirmado totales:</h5>
            <h2 className="float-right">
              <span>{Confirmed}</span>
            </h2>
            <p>
              Ultima Actualizacion,
              <br />
               {moment(Last_Update).fromNow()}
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card stat-card">
          <div className="card-body">
            <h5 className="card-title">Casos recuperados totales:</h5>
            <h2 className="float-right">
              <span>{Recovered}</span>
            </h2>
            <p>
              Ultima Actualizacion,
              <br />
               {moment(Last_Update).fromNow()}
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card stat-card">
          <div className="card-body">
            <h5 className="card-title">Casos de muertes totales:</h5>
            <h2 className="float-right">
              <span>{Deaths}</span>
            </h2>
            <p>
              Ultima actulizacion,
              <br />
              {moment(Last_Update).fromNow()}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Badge