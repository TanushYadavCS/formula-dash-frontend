import { useEffect, useState } from "react";
import Dropdown from "../Components/Dropdown";
import Statistic from "../Components/Statistic";
import "../css/SessionSelector.css";
import axios, { Axios } from "axios";
export default function SessionSelector() {
  const currentYear = new Date().getFullYear();
  const yearList = [];
  const [yearLabel, setYearLabel] = useState("Year");
  const [GPLabel, setGPLabel] = useState("GP");
  const [sessionLabel, setSessionLabel] = useState("Session");
  const [GPList, setGPList] = useState([]);
  const [sessionList, setSessionList] = useState([]);
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedGP, setSelectedGP] = useState(null);
  const [selectedSession, setSelectedSession] = useState(null);
  const [APIResponse, setAPIResponse] = useState(null);
  for (let i = currentYear; i > 2017; i--) {
    yearList.push(i);
  }
  function getYear(year) {
    setSelectedYear(year);
    setYearLabel(year);
    setSelectedGP(null);
    setGPLabel("GP");
    setSelectedSession(null);
    setSessionLabel("Session");
  }
  function getGP(GP) {
    setSelectedGP(GP);
    setGPLabel(GP);
    setSelectedSession(null);
    setSessionLabel("Session");
  }
  function getSession(session) {
    setSelectedSession(session);
    setSessionLabel(session);
  }
  useEffect(() => {
    if (!selectedYear) return;
    setSelectedGP(null);
    const apiGPList = [];

    axios
      .get(`https://api.jolpi.ca/ergast/f1/${selectedYear}/races`)
      .then((response) => {
        setAPIResponse(response.data);
        response.data.MRData.RaceTable.Races.map((gp) => {
          const raceTimeUTC = new Date(`${gp.date}T${gp.time}`);
          const now = new Date();
          if (now > raceTimeUTC) {
            apiGPList.push(gp.raceName.replaceAll("Grand Prix", "GP"));
          }
        });
        setGPList(apiGPList);
      })
      .catch((error) => {
        console.error("Error fetching GP List: ", error);
      });
  }, [selectedYear]);
  useEffect(() => {
    if (!APIResponse || !selectedGP) return;
    setSelectedSession(null);
    const apiSessionList = [];
    const sessionItem = APIResponse.MRData.RaceTable.Races.find(
      (gp) => gp.raceName == selectedGP.replaceAll("GP", "Grand Prix")
    );
    if (!sessionItem) return;
    if (sessionItem.FirstPractice) apiSessionList.push("FP1");
    if (sessionItem.SprintQualifying || sessionItem.SprintShootout)
      apiSessionList.push("SQ");
    if (sessionItem.Sprint) apiSessionList.push("Sprint");
    if (sessionItem.SecondPractice) apiSessionList.push("FP2");
    if (sessionItem.ThirdPractice) apiSessionList.push("FP3");
    if (sessionItem.Qualifying) apiSessionList.push("Q");
    apiSessionList.push("Race");
    console.log(sessionItem);
    setSessionList(apiSessionList);
  }, [APIResponse, selectedGP]);
  return (
    
      <div className="an_body">
        <div className="an_sessionChoose"></div>
        <div className="an_scBody">
          <div className="an_scElement">
            <Dropdown
              availability={true}
              classname={`year_dropdown available `}
              label={yearLabel}
              children={yearList}
              onSelect={getYear}
            />
          </div>
          <div className="an_scElement">
            <Dropdown
              availability={selectedYear ? true : false}
              label={GPLabel}
              children={GPList}
              onSelect={getGP}
              classname={`${selectedYear ? "available" : "unavailable"}`}
            />
          </div>
          <div className="an_scElement">
            <Dropdown
              availability={selectedGP && APIResponse ? true : false}
              label={sessionLabel}
              children={sessionList}
              onSelect={getSession}
              classname={`${selectedGP ? "available" : "unavailable"}`}
            />
          </div>
        </div>
        <div className="an_fetchButton">
          <button
            className={
              selectedSession ? "an_scFetchButton active" : "an_scFetchButton"
            }
          >
            Proceed
          </button>
        </div>
        <div></div>
      </div>
  );
}
