import "../css/CircuitInfo.css";
import { useState, useEffect } from "react";
import calendar from "../data/calendar.json";
import circuits from "../data/circuits.json";
import { formatLocalDateNoDay, getRace } from "../utils";
export default function CircuitInfo() {
  const [currentRace, setCurrentRace] = useState(null);
  useEffect(() => {
    const race = getRace(circuits);
    setCurrentRace(race);
  }, []);
  if (!currentRace) return "Error";
  const currentWeek = calendar.find(
    (entry) => entry.round == currentRace.round
  );
  return (
    <div className="ci_content">
      <div className="ci_header">
        {currentRace.name} <span className="ci_headerText">GP</span>
      </div>
      <div className="ci_flex">
        <div className="ci_comp">
          <div className="ci_desc">Circuit</div>
          <div className="ci_val">{currentRace.circuit}</div>
        </div>
        <div className="ci_comp">
          <div className="ci_desc">Circuit Length</div>
          <div className="ci_val">{currentRace.track_info.length} km</div>
        </div>
        <div className="ci_comp">
          <div>
            <div className="ci_desc">Laps</div>
            <div className="ci_val">{currentRace.track_info.laps}</div>
          </div>
          <div>
            <div className="ci_desc">Corners</div>
            <div className="ci_val">{currentRace.track_info.corners}</div>
          </div>
        </div>
        </div>
      </div>
  );
}
