import React from "react";
import "../assets/styles/components/AllDataCard.scss";
import {
  TempSmallIcon,
  HumiditySmallIcon,
  PollutionSmallIcon,
} from "../assets/icons";
import AllDataCardRow from "./AllDataCardRow";
import moment from "moment";

const AverageCard = ({ fetchData }) => {
  return (
    <div className="all-data-row">
      <div className="header-row">
        <div className="date-time-wrapper">
          <div className="day">
            {moment(fetchData[0].created.substr(0, 10)).format("ddd")}
          </div>
          <div className="date">
            {moment(fetchData[0].created.substr(0, 10)).format("DD.MMM.YYYY")}
          </div>
        </div>
        <div className="data-icon-wrapper">
          <TempSmallIcon className="data-icon" />
        </div>
        <div className="data-icon-wrapper">
          <HumiditySmallIcon className="data-icon" />
        </div>
        <div className="data-icon-wrapper">
          <PollutionSmallIcon className="data-icon" />
        </div>
      </div>
      {fetchData?.length &&
        fetchData.map((r) => {
          return fetchData ? (
            <div className="hour-data">
              {<AllDataCardRow response={r} key={r} />}
            </div>
          ) : (
            <div> </div>
          );
        })}
    </div>
  );
};
export default AverageCard;
