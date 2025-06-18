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
    calRef.current.scrollIntoView({ block: "start" });
  }, []);
  return (
    <div className="cal_content">
      <div className="cal_header">
        <div className="cal_heading">
          Race <span className="cal_accentText">Calendar</span>{" "}
        </div>
      </div>

      <div className="cal_body">
        <table className="cal_table">
          <tbody>
            {calendar.map((element) =>
              element.name ? (
                <>
                  <tr
                    ref={currentRace.round == element.round ? calRef : null}
                    id={`${
                      currentRace.round == element.round
                        ? "cal_currentRaceElement"
                        : "cal_element"
                    }`}
                    className={`cal_row ${
                      currentRace.round == element.round
                        ? "cal_currentRace"
                        : ""
                    } `}
                  >
                    <td className="cal_dateRange" colSpan={2}>
                      {formatLocalDateNoDay(element.startDate)} -{" "}
                      {formatLocalDateNoDay(element.endDate)}
                    </td>
                  </tr>
                  <tr
                    className={`cal_row ${
                      currentRace.round == element.round
                        ? "cal_currentRace"
                        : ""
                    } `}
                  >
                    <td className="cal_raceName" colSpan={2}>
                      <span className="cal_raceText">{element.name}</span>
                    </td>
                  </tr>
                </>
              ) : (
                <>
                  <tr>
                    <td colSpan={2} className="cal_gap">
                      <span className="cal_gapText">
                        Break for {element.gap}{" "}
                        {element.gap == 1 ? "Week" : "Weeks"}
                      </span>
                    </td>
                  </tr>
                </>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
