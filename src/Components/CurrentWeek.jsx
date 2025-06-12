import "./css/CurrentWeek.css";
import { useState, useEffect } from "react";
import circuits from "../data/circuits.json";
import { getRace } from "../utils";
export default function CurrentWeek() {
  const [currentRace, setCurrentRace] = useState(null);
  useEffect(() => {
    const race = getRace(circuits);
    setCurrentRace(race);
  }, []);
  if (!currentRace) return "Error";
  return (
    <div className="cw_content">
         <div className="cw_name">{currentRace.name} <span className="cw_accentText">GP</span></div>
    <div className="cw_trackMap"><img className="cw_map" src={currentRace.map} /></div>
      <div className="cw_circuit">{currentRace.circuit}</div>
    </div>
  );
}
