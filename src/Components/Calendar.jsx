import "./css/Calendar.css";
import {formatLocalDateNoDay } from "../utils";
import calendar from "../data/calendar.json";
import circuits from "../data/circuits.json"
import { getRace } from "../utils";
export default function Calendar() {
  const currentRace = getRace(circuits);
  const currentRaceElem = document.getElementById('cal_currentRaceElement');
  if (currentRaceElem!= null){currentRaceElem.scrollIntoView({behavior:"smooth", block:"center"});};
  return (
    <div className="cal_content">
      <div className="cal_header">Race <span className="cal_accentText">Calendar</span></div>
      <div className="cal_body">
        <table className="cal_table"><tbody>
        {
          calendar.map((element) => (
            
           element.name ? <tr id={`${currentRace.round==element.round ? "cal_currentRaceElement" : "cal_element"}`} className={`cal_row ${currentRace.round==element.round ? "cal_currentRace" : ""} ${element.round%2==0 ? "cal_even" : "cal_odd"}`}>
            <td className="cal_dateRange">{formatLocalDateNoDay(element.startDate)} - {formatLocalDateNoDay(element.endDate)}</td>
            <td className="cal_raceName"><span className="cal_raceText">{element.name}</span></td>
           </tr>
           : <tr className="cal_row"><td colSpan={2} className="cal_gap"><span className="cal_gapText">Break for {element.gap} {element.gap == 1 ? "Week" : "Weeks"}</span></td></tr>
            ))}
            </tbody></table> 
      </div>
    </div>
  );
}
