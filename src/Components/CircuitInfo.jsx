import "./css/CircuitInfo.css";
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
  const currentWeek = calendar.find(entry => entry.round==currentRace.round);
  return (
    <div className="cw_content">
      <div className="cw_name">
        {currentRace.name} <span className="cw_accentText">GP</span>
      </div>
      <div className="cw_body">
        <div className="cw_weekend">
          {formatLocalDateNoDay(currentWeek.startDate)} - {formatLocalDateNoDay(currentWeek.endDate)}
        </div>
        <div className="cw_circuit">
          <span>{currentRace.circuit}</span>
        </div>
        <div className="cw_length">
          Length: <span>{currentRace.track_info.length} km</span>
        </div>
        <div className="cw_laps">
          No. of laps: <span>{currentRace.track_info.laps}</span>
        </div>
        <div className="cw_corners">
          No. of corners: <span>{currentRace.track_info.corners}</span>
        </div>
      </div>
    </div>
  );
}
