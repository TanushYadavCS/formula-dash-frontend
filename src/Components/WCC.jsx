import "./css/WCC.css";
import axios from "axios";
import { useState, useEffect } from "react";
export default function WDC() {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get("https://api.jolpi.ca/ergast/f1/2025/constructorstandings/")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="cc_content">
      <div className="cc_header">
        WCC <span className="cc_headerText">Standings</span>
      </div>
      <div className="cc_body">
        {data ? (
          data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings.map(
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
        ) : (
          <div>No data</div>
        )}
      </div>
    </div>
  );
}
