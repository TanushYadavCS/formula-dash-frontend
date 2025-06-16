import "./css/Schedule.css";
import { useState, useEffect } from "react";
import circuits from "../data/circuits.json";
import { formatLocalDate} from "../utils";
import { formatLocalTime } from "../utils";
import { getRace } from "../utils";
export default function Schedule(){
    const [currentRace, setCurrentRace] = useState(null);
    useEffect(() => {
      const race = getRace(circuits);
      setCurrentRace(race);
    }, []);
    const sessionNames = {
      "practice_1": "FP1",
      "practice_2": "FP2",
      "practice_3": "FP3",
      "qualifying": "Q",
      "sprint": "Sprint",
      "sprint_qualifying": "SQ",
      "race": "Race",
    };
    if (!currentRace) return ("Error");
    return(
        <div className="sch_content">
            <div className="sch_header">Weekend <span className="sch_accentText">Schedule</span></div>
            <table className="sch_table">
                <tbody>
                 {Object.entries(currentRace.sessions).map(([sessionID, time]) => (
                    <tr className="sch_session">
                        <td className="sch_sessionName">{sessionNames[sessionID]}</td>
                        <td className="sch_sessionDate">{formatLocalDate(time)}<br /><span className="sch_sessionTime">{formatLocalTime(time)}</span></td>
                    </tr>
                 ))}
                 </tbody>
            </table>
        </div>
    );
}