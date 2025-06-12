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
    <div className="content">
      <div className="header">Round {currentRace.round}</div>
      <div className="name">{currentRace.name}</div>
      <div className="trackMap"></div>
      <div className="circuit">{currentRace.circuit}</div>
    </div>
  );
}
