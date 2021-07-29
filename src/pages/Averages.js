import React, { useEffect, useState } from "react";
import { MeasurementCard } from "../components/index";
import "../assets/styles/pages/averages.scss";

function Averages() {
  const [fetchData, setFetchData] = useState({});
  useEffect(() => {
    fetch("https://airvironment.live/api/measurements").then((response) =>
      response.json().then((r) => setFetchData(r.response))
    );
  }, []);

  console.log(fetchData);
  const data = {
    title: "Mon",
    subtitle: "07. Jul.",
    // obj={"{id: 1, name: 'Jovica'}"}
    // arr={[1, 2, 3, 4]}
    temp: 26,
    tempMin: 22,
    tempMax: 30,
    hum: 48,
    humMin: 40,
    humMax: 56,
    pol: 0.6,
    polMin: 0.5,
    polMax: 0.7,
  };
  return fetchData.length ? (
    <div className="averages-container">
      {fetchData.map((card) => (
        <MeasurementCard data={data} fetchedData={card} />
      ))}
    </div>
  ) : (
    <div />
  );
  // <MeasurementCard data={data} />;
}

export default Averages;
