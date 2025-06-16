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
      <div className="ci_header">
        {currentRace.name} <span className="ci_headerText">GP</span>
      </div>
      <div className="ci_tableDiv">
        <table className="ci_table">
          <tbody>
            <tr>
              <td colSpan={2} className="ci_circuitDesc">Circuit</td></tr><tr>
              <td className="ci_circuit" colSpan={2}>{currentRace.circuit}</td>
            </tr>
            <tr>
        
              <td colSpan={2} className="ci_lengthDesc">Length</td></tr><tr>
              <td colSpan={2} className="ci_length">{currentRace.track_info.length} km</td>
            </tr>
            <tr>
        
              <td colSpan={2} className="ci_lengthDesc">Laps</td></tr><tr>
              <td colSpan={2} className="ci_length">{currentRace.track_info.laps}</td>
            </tr>
          </tbody>
        </table>  
      </div>
    </div>
  );
}
