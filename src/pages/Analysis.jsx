import { useState } from "react";
import Dropdown from "../Components/Dropdown";
import Statistic from "../Components/Statistic";
import "../css/Analysis.css";
import axios, { Axios } from "axios";
export default function Analysis() {
  const currentYear = new Date().getFullYear();
  const yearList = [];
  for (let i = currentYear; i > 2017; i--) {
    yearList.push(i);
  }
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedGP, setSelectedGP] = useState(null);
  const [selectedSession, setSelectedSession] = useState(null);
  function getYear(year){
    setSelectedYear(year);
  }
  function FetchGP(){
    selectedYear ?
    axios.get(`https://api.openf1.org/v1/meetings?year=${selectedYear}`)
    .then(
      (response) => {
        console.log(response)
      }
    )
    .catch(
      (error) => {
        "API Fetch Error- ", error
      }
    )
    :
    ""
  }
  return (
    <div className="analysis_main">
      <div className="an_header"></div>
      <div className="an_body">
        <div className="an_sessionChoose">
          <div className="an_scHeader">
            <span>
              Select a <span className="an_scHeaderAccent">session</span> to
              analyse
            </span>
          </div>{" "}
        </div>
        <div className="an_scBody">
          <div className="an_scElement">
            <Dropdown availability={true} classname={`year_dropdown available `} label={"Year"} children={yearList} onSelect={getYear} />
          </div>
          <div className="an_scElement">
            <Dropdown availability={selectedYear ? true : false} label={"GP"} classname={`${selectedYear ? "available" : "unavailable"}`} />
          </div>
          <div className="an_scElement">
            <Dropdown availability={selectedGP ? true : false} label={"Session"} classname={`${selectedGP ? "available" : "unavailable"}`}/>
          </div>
          <FetchGP />
        </div>
        <div></div>
      </div>
    </div>
  );
}
