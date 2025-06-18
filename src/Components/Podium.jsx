import { useState, useEffect } from "react";
import "./css/podium.css";
import axios from "axios";
export default function Podium() {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get("https://api.jolpi.ca/ergast/f1/2025/last/results/")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="pod_content">
      <div className="pod_header">
        Last <span className="pod_headerText">Podium</span>
      </div>
      <div className="pod_body">
        <div className="pod_raceName">
            {data?.MRData?.RaceTable?.Races?.[0].raceName}
        </div>
        <div className="pod_element">
         
          <div className="pod_driverName"   
            >
            <div className="pod_driverdiv" >
            <div className="pod_driverPos">
            {data?.MRData?.RaceTable?.Races?.[0]?.Results?.[0]?.positionText}st
          </div>
            <svg className="pod_divider" style={{fill: `var(--${data?.MRData?.RaceTable?.Races?.[0]?.Results?.[0]?.Constructor.constructorId}-accent)`}} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M160-440v-80h640v80H160Z"/></svg>
                <div className="pod_driver">{
                  data?.MRData?.RaceTable?.Races?.[0]?.Results?.[0]?.Driver
                    .code
                }
            </div></div>
          </div>
        </div>

        <div className="pod_element">
         
         <div className="pod_driverName"   
           >
           <div className="pod_driverdiv" >
           <div className="pod_driverPos">
           {data?.MRData?.RaceTable?.Races?.[0]?.Results?.[1]?.positionText}nd
         </div>
           <svg className="pod_divider" style={{fill: `var(--${data?.MRData?.RaceTable?.Races?.[0]?.Results?.[1]?.Constructor.constructorId}-accent)`}} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M160-440v-80h640v80H160Z"/></svg>
               <div className="pod_driver">{
                 data?.MRData?.RaceTable?.Races?.[0]?.Results?.[1]?.Driver
                   .code
               }
           </div></div>
         </div>
       </div>

       <div className="pod_element">
         
          <div className="pod_driverName"   
            >
            <div className="pod_driverdiv" >
            <div className="pod_driverPos">
            {data?.MRData?.RaceTable?.Races?.[0]?.Results?.[2]?.positionText}rd
          </div>
            <svg className="pod_divider" style={{fill: `var(--${data?.MRData?.RaceTable?.Races?.[0]?.Results?.[2]?.Constructor.constructorId}-accent)`}} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M160-440v-80h640v80H160Z"/></svg>
                <div className="pod_driver">{
                  data?.MRData?.RaceTable?.Races?.[0]?.Results?.[2]?.Driver
                    .code
                }
            </div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
