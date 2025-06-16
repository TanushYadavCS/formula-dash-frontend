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
  const currentWeek = calendar.find(
    (entry) => entry.round == currentRace.round
  );
  return (
      <div className="ci_content">
        <table className=".ci_table">
          <tr>
            <td className="ci_circuitDesc" colSpan={2}>Circuit</td></tr><tr>
            <td className="ci_circuit" colSpan={2}>{currentRace.circuit}</td>
          </tr>
          <tr>
            <td className="ci_lengthDesc" colSpan={2}>Length</td></tr><tr>
            <td className="ci_length" colSpan={2}>{currentRace.track_info.length} km</td>
          </tr>
          <tr>
            <td className="ci_lapsDesc" colSpan={2}>Laps</td></tr><tr>
            <td className="ci_laps" colSpan={2}>{currentRace.track_info.laps}</td>
          </tr>
          <tr>
            <td className="ci_cornersDesc" colSpan={2}>Corners</td></tr><tr>
            <td className="ci_corners">{currentRace.track_info.corners}</td>
          </tr>
          
        </table>
      </div>
  );
}
