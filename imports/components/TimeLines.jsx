import { Line } from "react-chartjs-2";
import SpinnerStats from "../utils/Spinner";

const TimeLines = ({ datosTimeLine, loader, country }) => {
  const lineChart = datosTimeLine ? (
    <Line
      data={{
        labels: Object.values(datosTimeLine).map((item) =>
          new Date(item.Date).toISOString().substring(0, 10)
        ),
        datasets: [
          {
            data: Object.values(datosTimeLine).map((item) => item.Confirmed),

            label: "Infectados",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: Object.values(datosTimeLine).map((item) => item.Recovered),
            label: "Recuperados",
            borderColor: "Green",

            fill: true,
          },
          {
            data: Object.values(datosTimeLine).map((item) => item.Deaths),
            label: "Fallecidos",
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;
  const LoaderCharts = loader ? <SpinnerStats /> : lineChart;
  return (
    <div className="col-lg">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            Grafica de tiempo de coronavirus en {country}
          </h5>

          {LoaderCharts}
        </div>
      </div>
    </div>
  );
};


export default TimeLines;
