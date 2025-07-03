import "../css/LastSession.css";
import { useData } from "../context/DataContext";
import axios from "axios";
import circuits from "../data/circuits.json";
import { useState, useEffect } from "react";
import { getPreviousRace } from "../utils";
export default function LastSession() {
  const {lastSession} = useData();
  const prevRace = getPreviousRace(circuits);
  return (
    <div className="ls_content">
      <div className="ls_header">
        Last <span className="ls_headerText">Race</span>
      </div>
      <div className="ls_body">
        <div className="ls_raceName">
          <span>
            {prevRace.name} <span className="ls_headerText">GP</span>
          </span>
        </div>
        <div className="ls_raceData">
          <table className="ls_table">
            <tbody>
              {lastSession
                ? lastSession.data.MRData.RaceTable.Races[0].Results.map((result) => {
                    return (
                      <tr className="ls_raceRow">
                        <td className="ls_racePos">{result.positionText}</td>
                        <td className="ls_raceSvg">
                          <svg
                            className="ls_divider"
                            style={{
                              fill: `var(--${result.Constructor.constructorId}-accent)`,
                            }}
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 -960 960 960"
                            width="24px"
                            fill="#ffffff"
                          >
                            <path d="M160-440v-80h640v80H160Z" />
                          </svg>
                        </td>
                        <td className="ls_raceCode">{result.Driver.code}</td>
                        <td className="ls_raceStatus">
                          {" "}
                          {result.positionText == "1"
                            ? "Interval"
                            : result.status == "Retired"
                            ? "DNF"
                            : result.status == "Lapped"
                            ? result.status
                            : result.Time?.time}
                        </td>
                      </tr>
                    );
                  })
                : <tr className="ls_raceRow">
                <td className="ls_racePos">{"-"}</td>
                <td className="ls_raceSvg">
                </td>
                <td className="ls_raceCode">{"-"}</td>
                <td className="ls_raceStatus">
                  {" "}
                  {"-"}
                </td>
              </tr>}
            </tbody>
          </table>
        </div><div className="fadeBottom"></div>
      </div>
    </div>
  );
}
