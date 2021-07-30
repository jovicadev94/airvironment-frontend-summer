import "../assets/styles/components/MeasurementCard.scss";
import {
  HighValueIcon,
  HumiditySmallIcon,
  PollutionSmallIcon,
  TempSmallIcon,
} from "../assets/icons";
import LowValueIcon from "../assets/icons/LowValueIcon";
import moment from "moment";

function MeasurementCard({ averageValue }) {
  console.log(averageValue);
  return (
    <div className="measurementCard">
      <div className="measurementCardTitle">
        <span className="measurement-title">
          {moment(averageValue.date, "DD.M.YYYY.").format("ddd")}
        </span>
        <span className="measurement-subtitle">
          {moment(averageValue.date, "DD.M.YYYY.").format("DD. MMM. YYYY.")}
        </span>
      </div>
      <hr />
      <div className="measurement-details">
        <div className="measurement-details-left">
          <TempSmallIcon />
          <div className="measurement-details-left-subright">
            <div className="measurement-details-left-subright-up">
              <HighValueIcon />
              <span>{averageValue.maxTemperature}C°</span>
            </div>
            <div className="measurement-details-left-subright-down">
              <LowValueIcon />
              <span>{averageValue.minTemperature}C°</span>
            </div>
          </div>
        </div>
        <div className="measurement-details-right">
          <span className="temperature">
            / {averageValue.averageTemperature}C°
          </span>
        </div>
      </div>
      <div className="measurement-details">
        {/*<span className="leftSpan">21</span>*/}
        {/*<span className="rightSpan">22</span>*/}
        <div className="measurement-details-left">
          <HumiditySmallIcon />
          <div className="measurement-details-left-subright">
            <div className="measurement-details-left-subright-up">
              <HighValueIcon />
              <span>{averageValue.maxHumidity}%</span>
            </div>
            <div className="measurement-details-left-subright-down">
              <LowValueIcon />
              <span>{averageValue.minHumidity}%</span>
            </div>
          </div>
        </div>
        <div className="measurement-details-right">
          <span className="temperature">/ {averageValue.averageHumidity}%</span>
        </div>
      </div>
      <div className="measurement-details">
        {/*<span className="leftSpan">21</span>*/}
        {/*<span className="rightSpan">22</span>*/}
        <div className="measurement-details-left">
          <PollutionSmallIcon />
          <div className="measurement-details-left-subright">
            <div className="measurement-details-left-subright-up">
              <HighValueIcon />
              <span>{averageValue.maxPollution}ppb</span>
            </div>
            <div className="measurement-details-left-subright-down">
              <LowValueIcon />
              <span>{averageValue.minPollution}ppb</span>
            </div>
          </div>
        </div>
        <div className="measurement-details-right">
          <span>
            <span className="temperature">
              / {averageValue.averagePollution}
            </span>
            ppb
          </span>
        </div>
      </div>
    </div>
  );
}

export default MeasurementCard;
