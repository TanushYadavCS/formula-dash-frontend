import "./css/Countdown.css";
import circuits from "../data/circuits.json";
import { getRace} from "../utils";
import CountdownComponent from 'react-countdown';
export default function Countdown() {
  const currentRace = getRace(circuits);
  return (
    <div className="co_content">
      <div className="co_background">
        <img src={currentRace.map} />
        <div className="co_header">
          <span className="co_headerText">Race</span> starts in
        </div>
        <div className="co_countdown"><CountdownComponent className="co_countdownComp" date={currentRace.sessions.race} /></div>
      </div>
    </div>
  );
}
