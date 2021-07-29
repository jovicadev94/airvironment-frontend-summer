import "../assets/styles/components/MeasurementCard.scss";
import {
  HighValueIcon,
  HumiditySmallIcon,
  PollutionSmallIcon,
  TempSmallIcon,
} from "../assets/icons";
import LowValueIcon from "../assets/icons/LowValueIcon";

function MeasurementCard({ data, fetchedData }) {
  return (
    <div className="measurementCard">
      <div className="measurementCardTitle">
        <span className="measurement-title">{data.title}</span>
        <span className="measurement-subtitle">{data.subtitle}</span>
      </div>
      <hr />
      <div className="measurement-details">
        <div className="measurement-details-left">
          <TempSmallIcon />
          <div className="measurement-details-left-subright">
            <div className="measurement-details-left-subright-up">
              <HighValueIcon />
              <span>{data.tempMax}C°</span>
            </div>
            <div className="measurement-details-left-subright-down">
              <LowValueIcon />
              <span>{data.tempMin}C°</span>
            </div>
          </div>
        </div>
        <div className="measurement-details-right">
          <span className="temperature">/ {fetchedData.temperature}C°</span>
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
              <span>{data.humMax}%</span>
            </div>
            <div className="measurement-details-left-subright-down">
              <LowValueIcon />
              <span>{data.humMin}%</span>
            </div>
          </div>
        </div>
        <div className="measurement-details-right">
          <span className="temperature">/ {fetchedData.humidity}%</span>
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
              <span>{data.polMax}ppb</span>
            </div>
            <div className="measurement-details-left-subright-down">
              <LowValueIcon />
              <span>{data.polMin}ppb</span>
            </div>
          </div>
        </div>
        <div className="measurement-details-right">
          <span>
            <span className="temperature">/ {fetchedData.pollution}</span>ppb
          </span>
        </div>
      </div>
    </div>
  );
}

export default MeasurementCard;
