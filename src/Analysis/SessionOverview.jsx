import { useStore } from "../context/store";
import { CircleFlag } from "react-circle-flags";
import "../css/SessionOverview.css";
import countryCodes from "../data/countryCodes.json";
import Statistic from "../Components/Statistic";
export default function SessionOverview() {
  const data = useStore((state) => state.data);
  const results = data?.results;
  const sessionInfo = data?.session_info;
  const fastestLap = data?.fastestLap;
  const alpha3 = sessionInfo?.Meeting?.Country?.Code;
  console.log(countryCodes);
  console.log(sessionInfo);
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
                <div className="so_gpLocation">
                  {sessionInfo?.Meeting?.Location}
                </div>
          </div>
            
          </div>
          <div className="so_statistics">
          <Statistic className="so_statistic" headerDiv="P1" bodyDiv={<div className="so_driver" style={{
                              color: `#${results?.[0]?.TeamColor}`,
                            }}>{results?.[0].Abbreviation}</div>}footerDiv="Interval" />
              <Statistic className="so_statistic" headerDiv="P2" bodyDiv={<div className="so_driver" style={{
                              color: `#${results?.[1]?.TeamColor}`,
                            }}> {results?.[1].Abbreviation}</div>} footerDiv={`+${results?.[1].Time.toFixed(3)}s`} />
              <Statistic className="so_statistic" headerDiv="P3" bodyDiv={<div className="so_driver" style={{
                              color: `#${results?.[2]?.TeamColor}`,
                            }}> {results?.[2].Abbreviation}</div>} footerDiv={`+${results?.[2].Time.toFixed(3)}s`} />
              <Statistic className="so_statistic" headerDiv="Fastest Lap" bodyDiv={fastestLap?.OverallFastestLap} footerDiv={<div className="so_driver" style={{color : `#${fastestLap?.teamColor}`}}> {fastestLap?.abbr}</div>} />
             
          </div>
        </div>
       
      </div>
    </div>
  );
}
