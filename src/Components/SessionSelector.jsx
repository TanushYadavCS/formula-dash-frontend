import { useEffect, useState } from "react";
import Dropdown from "../Components/Dropdown";
import Statistic from "../Components/Statistic";
import { useStore } from "../context/store";
import "../css/SessionSelector.css";
import axios, { Axios } from "axios";
export default function SessionSelector({ onProceed }) {
  const currentYear = new Date().getFullYear();
  const yearList = [];
  const [loading, setLoading] = useState(false);
  const [yearLabel, setYearLabel] = useState("Year");
  const [GPLabel, setGPLabel] = useState("GP");
  const [sessionLabel, setSessionLabel] = useState("Session");
  const [GPList, setGPList] = useState([]);
  const [sessionList, setSessionList] = useState([]);
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedGP, setSelectedGP] = useState(null);
  const [selectedRound, setSelectedRound] = useState(null);
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
    const GP_object = GPList.find(
      (item) => item.raceName === GP.replaceAll("GP", "Grand Prix")
    );
    setSelectedGP(GP);
    setSelectedRound(GP_object.round);
    setGPLabel(GP);
    setSelectedSession(null);
    setSessionLabel("Session");
  }
  function getSession(session) {
    setSelectedSession(session);
    setSessionLabel(session);
  }
  function handleClick() {
    setLoading(true);
    axios
      .get(
        `http://127.0.0.1:8000/api/session/${selectedYear}/${selectedRound}/${selectedSession}`
      )
      .then((response) => {
        useStore.getState().setData(response.data);
        setLoading(false);
        
      }).then(onProceed());
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
          const firstPracticeUTC = new Date(`${gp.FirstPractice?.date}T${gp.FirstPractice?.time}`);
          const now = new Date();
          if (selectedYear < 2022 || now > firstPracticeUTC) {
            apiGPList.push(gp);
          }
        });
        setGPList(apiGPList);
      })
      .catch((error) => {
        console.error("Error fetching GP List: ", error);
      });
  }, [selectedYear]);
  useEffect(() => {
    const now = new Date();
    if (!APIResponse || !selectedGP) return;
    setSelectedSession(null);
    const apiSessionList = [];
    const sessionItem = APIResponse.MRData.RaceTable.Races.find(
      (gp) => gp.raceName == selectedGP.replaceAll("GP", "Grand Prix")
    );
    if (!sessionItem) return;
    const firstPracticeUTC = new Date(`${sessionItem.FirstPractice?.date}T${sessionItem.FirstPractice?.time}`);
    const secondPracticeUTC = new Date(`${sessionItem.SecondPractice?.date}T${sessionItem.SecondPractice?.time}`);
    const thirdPracticeUTC = new Date(`${sessionItem.ThirdPractice?.date}T${sessionItem.ThirdPractice?.time}`);
    const sprintQualifyingUTC = new Date(`${sessionItem.SprintQualifying?.date}T${sessionItem.SprintQualifying?.time}`);
    const sprintShootoutUTC = new Date(`${sessionItem.SprintShootout?.date}T${sessionItem.SprintShootout?.time}`);
    const sprintUTC = new Date(`${sessionItem.Sprint?.date}T${sessionItem.Sprint?.time}`);
    const qualifyingUTC = new Date(`${sessionItem.Qualifying?.date}T${sessionItem.Qualifying?.time}`);
    const raceUTC = new Date(`${sessionItem.date}T${sessionItem.time}`);
    if (sessionItem.FirstPractice && now > selectedYear < 2022 || firstPracticeUTC ) apiSessionList.push("FP1");
    if (sessionItem.SprintQualifying && now > sprintQualifyingUTC)
      apiSessionList.push("SQ");
    if (sessionItem.Sprint && selectedYear < 2022 || now > sprintUTC ) apiSessionList.push("Sprint");
    if (sessionItem.SecondPractice && selectedYear < 2022 || now > secondPracticeUTC) apiSessionList.push("FP2");
    if (sessionItem.ThirdPractice && selectedYear < 2022 || now > thirdPracticeUTC) apiSessionList.push("FP3");
    if (sessionItem.Qualifying && selectedYear < 2022 || now > qualifyingUTC) apiSessionList.push("Qualifying");
    if (sessionItem.SprintShootout && selectedYear < 2022 || now > sprintShootoutUTC)
      apiSessionList.push("Sprint Shootout")
    if (now > raceUTC)
    apiSessionList.push("Race");
    console.log(sessionItem);
    setSessionList(apiSessionList);
  }, [APIResponse, selectedGP]);
  return (
    <div className="an_body">
      <div className="an_sessionChoose">
        <div className="an_scBody">
          <div className="an_scElement_Year">
            <Dropdown
              availability={true}
              classname={`year_dropdown available `}
              label={yearLabel}
              children={yearList}
              onSelect={getYear}
            />
          </div>
          <div className="an_scElement_GP">
            <Dropdown
              availability={selectedYear ? true : false}
              label={GPLabel}
              children={GPList.map((item) =>
                item.raceName.replaceAll("Grand Prix", "GP")
              )}
              onSelect={getGP}
              classname={`${selectedYear ? "available" : "unavailable"}`}
            />
          </div>
          <div className="an_scElement_Session">
            <Dropdown
              availability={selectedGP && APIResponse ? true : false}
              label={sessionLabel}
              children={sessionList}
              onSelect={getSession}
              classname={`${selectedGP ? "available" : "unavailable"}`}
            />
          </div>
        </div>
        <div></div>
        <button
          className={`${
            selectedSession ? "buttonAvailable" : "buttonUnavailable"
          } ${loading ? "buttonLoading" : ""}`}
          onClick={() => {
            selectedSession ? handleClick() : "";
          }}
        >
          <span>{loading == true ? "Loading..." : "Load Data"}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#ffffff"
          >
            <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
