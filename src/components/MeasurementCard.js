import "../assets/styles/components/MeasurementCard.scss";
import {
  HighValueIcon,
  HumiditySmallIcon,
  PollutionSmallIcon,
  TempSmallIcon,
} from "../assets/icons";
import LowValueIcon from "../assets/icons/LowValueIcon";

function MeasurementCard() {
  return (
    <div className="measurementCard">
      <div className="measurementCardTitle">
        <span className="measurement-title">Wed</span>
        <span className="measurement-subtitle">26.Jul.2021.</span>
      </div>
      <hr />
      <div className="measurement-details">
        {/*<span className="leftSpan">21</span>*/}
        {/*<span className="rightSpan">22</span>*/}
        <div className="measurement-details-left">
          <TempSmallIcon />
          <div className="measurement-details-left-subright">
            <div className="measurement-details-left-subright-up">
              <HighValueIcon />
              <span>30C°</span>
            </div>
            <div className="measurement-details-left-subright-down">
              <LowValueIcon />
              <span>22C°</span>
            </div>
          </div>
        </div>
        <div className="measurement-details-right">
          <span className="temperature">/ 26C°</span>
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
              <span>56%</span>
            </div>
            <div className="measurement-details-left-subright-down">
              <LowValueIcon />
              <span>40%</span>
            </div>
          </div>
        </div>
        <div className="measurement-details-right">
          <span className="temperature">/ 48%</span>
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
              <span>0.30ppb</span>
            </div>
            <div className="measurement-details-left-subright-down">
              <LowValueIcon />
              <span>0.30ppb</span>
            </div>
          </div>
        </div>
        <div className="measurement-details-right">
          <span>
            <span className="temperature">/ 0,60</span>ppb
          </span>
        </div>
      </div>
    </div>
  );
}

export default MeasurementCard;
