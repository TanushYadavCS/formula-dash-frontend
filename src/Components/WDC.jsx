import "../css/WDC.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useData } from "../context/DataContext";
export default function WDC() {
  const {WDC} = useData();
  return (
    <div className="dc_content">
      <div className="dc_header">
        <span>
          WDC <span className="dc_headerText">Standings</span>
        </span>
      </div>
      <div className="dc_body">
        {WDC ? (
          WDC.data.MRData.StandingsTable.StandingsLists[0].DriverStandings.map(
            (element) => {
              return (
                <div className="dc_element">
                  <div
                    className="dc_teamAccent"
                    style={{
                      backgroundColor: `var(--${element.Constructors[0].constructorId}-accent)`,
                    }}
                  ></div>
                  <div className="dc_main">
                    <div className="dc_pos">{element.positionText}</div>

                    <div className="dc_driverName">
                      <span>
                        {element.Driver.givenName == "Andrea Kimi"
                          ? "Kimi"
                          : element.Driver.givenName}{" "}
                        <span
                          style={{
                            color: `var(--${element.Constructors[0].constructorId}-accent)`,
                          }}
                        >
                          {" "}
                          {element.Driver.familyName}
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="dc_pts">{element.points} pts</div>
                </div>
              );
            }
          )
        ) : [...Array(20)].map((_, i) => (
          <div className="dc_element">
                  <div
                    className="dc_teamAccent"
                    style={{
                      backgroundColor: `var(--primary_adj)`,
                    }}
                  ></div>
                  <div className="dc_main">
                    <div className="dc_pos">-</div>

                    <div className="dc_driverName">
                      <span>
                        {"-"}
                        <span
                        >
                          {" "}
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="dc_pts">{"-"}</div>
                </div>
        ))}
        <div className="fadeBottom"></div>
      </div>
    </div>
  );
}
