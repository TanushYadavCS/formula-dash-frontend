import "../css/WCC.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useData } from "../context/DataContext";
export default function WDC() {
  const {WCC} = useData();
  return (
    <div className="cc_content">
      <div className="cc_header">
        <span>WCC <span className="cc_headerText">Standings</span></span>
      </div>
      <div className="cc_body">
        {WCC ? (
          WCC.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings.map(
            (element) => {
              return (
                <div className="cc_element">
                  <div
                    className="cc_teamAccent"
                    style={{
                      backgroundColor: `var(--${element.Constructor.constructorId}-accent)`,
                    }}
                  ></div>
                  <div className="cc_main">
                    <div className="cc_pos">{element.positionText}</div>
                    <div className="cc_constructorName">
                      <span
                        style={{
                          color: `var(--${element.Constructor.constructorId}-accent)`,
                        }}
                      >
                        {" "}
                        {element.Constructor.name == "Haas F1 Team" ? "Haas" : element.Constructor.name == "RB F1 Team" ? "Racing Bulls" : element.Constructor.name == "Alpine F1 Team" ? "Alpine" : element.Constructor.name}
                      </span>
                    </div>
                  </div>
                  <div className="cc_pts">{element.points} pts</div>
                </div>
              );
            }
          )
        ) : [...Array(20)].map((_, i) => (
          <div className="cc_element">
          <div
            className="cc_teamAccent"
            style={{
              backgroundColor: `var(--primary_adj)`,
            }}
          ></div>
          <div className="cc_main">
            <div className="cc_pos">-</div>
            <div className="cc_constructorName">
              <span
              >
                {"-"}
              </span>
            </div>
          </div>
          <div className="cc_pts">-</div>
        </div>
        ))}<div className="fadeBottom"></div>
      </div>
    </div>
  );
}
