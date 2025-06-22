import "./css/Calendar.css";
import { useEffect, useRef } from "react";
import { formatLocalDateNoDay } from "../utils";
import calendar from "../data/calendar.json";
import circuits from "../data/circuits.json";
import { getRace } from "../utils";
export default function Calendar() {
  const currentRace = getRace(circuits);
  const calRef = useRef(null);
  useEffect(() => {
    calRef.current.scrollIntoView({ block: "center" });
  }, []);
  return (
    <div className="cal_content">
      <div className="cal_header">
        <div className="cal_heading">
          Race <span className="cal_accentText">Calendar</span>{" "}
        </div>
      </div>

      <div className="cal_body">
        <div className="fadeTop"></div>
        {calendar.map((element) => {
          return element.name ? (
            <div
              className={`cal_element ${
                currentRace.round == element.round
                  ? "cal_currentRace"
                  : "cal_otherRace"
              } `}
              ref={currentRace.round == element.round ? calRef : null}
            >
              <div className="cal_main">
                <div className="cal_name">{element.name}</div>
                <div className="cal_dateRange">
                  {formatLocalDateNoDay(element.startDate)} -{" "}
                  {formatLocalDateNoDay(element.endDate)}
                </div>
              </div>
            </div>
          ) : (
            <div className="cal_gap">
              <div className="cal_gapOf">
                <span>Break - </span>
                {element.gap}
                <span>{element.gap > 1 ? " weeks" : " week"}</span>
              </div>
            </div>
          );
        })}
      <div className="fadeBottom"></div></div>
    </div>
  );
}
