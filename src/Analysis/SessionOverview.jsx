import { useStore } from "../context/store";
import Plot from "react-plotly.js";
import { CircleFlag } from "react-circle-flags";
import "../css/SessionOverview.css";
import countryCodes from "../data/countryCodes.json";
import Statistic from "../Components/Statistic";
import "../css/WDC.css";
import { text } from "d3";
export default function SessionOverview() {
  const data = useStore((state) => state.data);
  const results = data?.results;
  const sessionInfo = data?.session_info;
  const fastestLap = data?.fastestLap;
  const alpha3 = sessionInfo?.Meeting?.Country?.Code;
  const xData = results?.filter((v) => /\d/.test(v.Time) ).reduce((acc, cur, i) => {
    const prev = acc[i-1] || 0;
    acc.push(prev+cur?.Time||0);
    return acc;
  }, []);
  const times = results?.map((t) =>
    t.Abbreviation == results?.[0].Abbreviation
      ? t.Time
      : /\d/.test(t.ClassifiedPosition)
      ? results[0].Time - t.Time
      : null
  );
  const minTime = times ? Math.min(...times?.filter((v) => v != null)) : 0;
  const maxTime = times ?  Math.max(...times) : 0;
  return (
    <div className="so_main">
      <div className="so_sessionInfo">
        <div className="so_header">
          <div className="so_gpName">
            <CircleFlag
              className="flag"
              countryCode={countryCodes[alpha3]?.toLowerCase()}
            />
            <div>
              {sessionInfo?.Meeting?.Name}
              <div className="so_gpSession">{data?.name}</div>
              <div className="so_gpLocation">
                {sessionInfo?.Meeting?.Location}
              </div>
            </div>
          </div>
          <div className="so_statistics">
            <Statistic
              className="so_statistic P1"
              headerDiv={
                <div>
                  P1
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#FFD700"
                  >
                    <path d="M280-120v-80h160v-124q-49-11-87.5-41.5T296-442q-75-9-125.5-65.5T120-640v-40q0-33 23.5-56.5T200-760h80v-80h400v80h80q33 0 56.5 23.5T840-680v40q0 76-50.5 132.5T664-442q-18 46-56.5 76.5T520-324v124h160v80H280Zm0-408v-152h-80v40q0 38 22 68.5t58 43.5Zm200 128q50 0 85-35t35-85v-240H360v240q0 50 35 85t85 35Zm200-128q36-13 58-43.5t22-68.5v-40h-80v152Zm-200-52Z" />
                  </svg>
                </div>
              }
              bodyDiv={
                <div
                  className="so_driver"
                  style={{
                    color: `#${results?.[0]?.TeamColor}`,
                  }}
                >
                  {results?.[0].Abbreviation}
                </div>
              }
              footerDiv={`${["Sprint Qualifying", "Qualifying", "Sprint Shootout"].includes(data?.name) ? "Interval" : "Leader"}`}
            />
            <Statistic
              className="so_statistic P2"
              headerDiv={
                <div>
                  P2
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#C0C0C0"
                  >
                    <path d="M280-120v-80h160v-124q-49-11-87.5-41.5T296-442q-75-9-125.5-65.5T120-640v-40q0-33 23.5-56.5T200-760h80v-80h400v80h80q33 0 56.5 23.5T840-680v40q0 76-50.5 132.5T664-442q-18 46-56.5 76.5T520-324v124h160v80H280Zm0-408v-152h-80v40q0 38 22 68.5t58 43.5Zm200 128q50 0 85-35t35-85v-240H360v240q0 50 35 85t85 35Zm200-128q36-13 58-43.5t22-68.5v-40h-80v152Zm-200-52Z" />
                  </svg>
                </div>
              }
              bodyDiv={
                <div
                  className="so_driver"
                  style={{
                    color: `#${results?.[1]?.TeamColor}`,
                  }}
                >
                  {" "}
                  {results?.[1].Abbreviation}
                </div>
              }
              footerDiv={`+${results?.[1].Time?.toFixed(3)}`}
            />
            <Statistic
              className="so_statistic P3"
              headerDiv={
                <div>
                  P3
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#CD7F32"
                  >
                    <path d="M280-120v-80h160v-124q-49-11-87.5-41.5T296-442q-75-9-125.5-65.5T120-640v-40q0-33 23.5-56.5T200-760h80v-80h400v80h80q33 0 56.5 23.5T840-680v40q0 76-50.5 132.5T664-442q-18 46-56.5 76.5T520-324v124h160v80H280Zm0-408v-152h-80v40q0 38 22 68.5t58 43.5Zm200 128q50 0 85-35t35-85v-240H360v240q0 50 35 85t85 35Zm200-128q36-13 58-43.5t22-68.5v-40h-80v152Zm-200-52Z" />
                  </svg>
                </div>
              }
              bodyDiv={
                <div
                  className="so_driver"
                  style={{
                    color: `#${results?.[2]?.TeamColor}`,
                  }}
                >
                  {" "}
                  {results?.[2].Abbreviation}
                </div>
              }
              footerDiv={`+${results?.[2].Time?.toFixed(3)}`}
            />
            <Statistic
              className="so_statistic"
              headerDiv="Fastest Lap"
              bodyDiv={fastestLap?.OverallFastestLap}
              footerDiv={
                <div
                  className="so_driver"
                  style={{ color: `#${fastestLap?.teamColor}` }}
                >
                  {" "}
                  {fastestLap?.abbr}
                </div>
              }
            />
          </div>
        </div>
      </div>
      <div className="so_sessionColumn">
        <div className="so_sessionResult">
          {results?.slice(3).map((element) => {
            return (
              <div className="dc_element">
                <div className="dc_main">
                  <div className="dc_pos">{`${
                    /\d/.test(element.ClassifiedPosition) ? "P" : ""
                  }${element.ClassifiedPosition}`}</div>

                  <div className="dc_driverName">
                    <span
                      style={{
                        color: `#${element.TeamColor}`,
                      }}
                    >
                      {element.Abbreviation}
                    </span>
                  </div>
                </div>
                <div className="dc_pts">{`${ /\d/.test(
                  element.Time)
                    ? `+${
                        Math.floor(element.Time / 60) > 0
                          ? Math.floor(element.Time / 60) + ":"
                          : ""
                }${element.Time % 60 < 10 ? "0" : ""}${(element.Time % 60).toFixed(3)}`
                    : element.Time
                }`}</div>
              </div>
            );
          })}
        </div>
        <div className="so_driverData">
          {["Race", "Sprint"].includes(data?.name) ? <Plot
            data={[
              {
                type: "scatter",
                mode: "markers",
                marker : { color: results?.filter((v) => /\d/.test(v.Time) ).map((t) =>
                  t.Abbreviation == results?.[0]?.Abbreviation
                    ? `#${t.TeamColor}`
                    : /\d/.test(t.ClassifiedPosition)
                    ? `#${t.TeamColor}` : `#${t.TeamColor}`
                ),  size: 10 },
                y: results?.filter((v) => /\d/.test(v.Time) ).map((d) => d.Abbreviation),
                x: results?.filter((v) => /\d/.test(v.Time) ).map((t) =>
                  t.Abbreviation == results[0].Abbreviation
                    ? t.Time
                    : /\d/.test(t.ClassifiedPosition)
                    ? results[0].Time - t.Time
                    : 0
                ),
              },
            ]}
            layout={{
              shapes : [
                {
                  type: 'line',
                  x0: results[0].Time,
                  x1: results[0].Time,
                  y0: -0.5,
                  y1: results?.length - 0.5,
                  line: {
                    color: "#ffffff",
                    width: 2,
                    dash: "solid"
                  }
                },
              ],
              annotations: results?.filter((v) => /\d/.test(v.Time) ).map((d) => ({
                x : d.Abbreviation == results[0].Abbreviation ?
                d.Time
                : results[0].Time-d.Time,
                y : d.Abbreviation,
                text: d.Abbreviation,
                font: {
                  family: "Space Grotesk",
                  color: `#${d.TeamColor}`,
                  size: 14,
                  weight: "bold"
                  
                },
                showarrow: false,
                xanchor : "right",
                xshift: -10,
                xalign: "right"
                
              })),
              margin: { t: 0, r: 0, l: 0, b: 0 },
              grid: false,
              xaxis: {
                showgrid: false,
                zeroline: false,
                visible: false,
                range: [minTime - 5, maxTime + 5]
              },
              yaxis: {
                autorange: "reversed",
                showgrid: false,
                zeroline: false,
                visible: false,
                
              },
              font: {
                color: "white",
                weight: "bold"
              },
              legend: {
                font: {
                  color: "white",
                },
              },
              
              paper_bgcolor: "transparent",
              plot_bgcolor: "transparent",

              height: results?.length * 40,
            }}
            config={{
              responsive: true,
              displayModeBar: false,
            }}
            style={{
              width: "100%",
              height: "100%",
              maxHeight: "500px",
              overflowY: "auto",
            }}
          /> : <Plot
            data={[
              {
                type: "scatter",
                mode: "markers",
                marker : { color: results?.filter((v) => /\d/.test(v.Time) ).map((t) =>
                  t.Abbreviation == results?.[0]?.Abbreviation
                    ? `#${t.TeamColor}`
                    : /\d/.test(t.ClassifiedPosition)
                    ? `#${t.TeamColor}` : `#${t.TeamColor}`
                ),  size: 10 },
                y: results?.filter((v) => /\d/.test(v.Time) ).map((d) => d.Abbreviation),
                x: results?.filter((v) => /\d/.test(v.Time) ).reduce((acc, cur, i) => {
                  const prev = acc[i-1] || 0;
                  acc.push(prev+cur?.Time||0);
                  return acc;
                }, []),
              },
            ]}
            layout={{shapes : [
              {
                type: 'line',
                x0: xData?.[0],
                x1: xData?.[0],
                y0: -0.5,
                y1: results?.filter((v) => /\d/.test(v.Time) ).length - 0.5,
                line: {
                  color: "#ffffff",
                  width: 2,
                  dash: "solid"
                }
              },
            ],
            annotations: results?.map((d, i) => ({
              x : xData?.[i],
              y : d.Abbreviation,
              text: d.Abbreviation,
              font: {
                family: "Space Grotesk",
                color: `#${d.TeamColor}`,
                size: 14,
                weight: "bold"
                
              },
              showarrow: false,
              xanchor : "right",
              xshift: -10,
              xalign: "right"
              
            })),
              
            margin: { t: 0, r: 0, l: 0, b: 0 },
            grid: false,
            xaxis: {
              autorange: "reversed",
              showgrid: false,
              zeroline: false,
              visible: false,
              range: [minTime - 5, maxTime + 5]
            },
            yaxis: {
              autorange: "reversed",
              showgrid: false,
              zeroline: false,
              visible: false,
              
            },
            font: {
              color: "white",
              weight: "bold"
            },
            legend: {
              font: {
                color: "white",
              },
            },
            
            paper_bgcolor: "transparent",
            plot_bgcolor: "transparent",

            height: results?.filter((v) => /\d/.test(v.Time) ).length * 40,
          }}
          config={{
            displayModeBar: false,
            responsive: true
          }}
          style={{
            width: "100%",
            height: "100%",
            overflowY: "auto",
          }}
          />}
        </div>
      </div>
    </div>
  );
}
