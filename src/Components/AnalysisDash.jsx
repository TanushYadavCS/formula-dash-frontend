import { useState } from "react";
import { useStore } from "../context/store";
import "../css/AnalysisDash.css";
import StintAnalysis from "../Analysis/StintAnalysis";
import SessionOverview from "../Analysis/SessionOverview";
const componentMap = {
  StintAnalysis: StintAnalysis,
  SessionOverview: SessionOverview,
};


export default function AnalysisDash({ className = "" }) {
  const data = useStore((state) => state.data);
  const [activeComponent, setActiveComponent] = useState("SessionOverview");
  const Component = componentMap[activeComponent];
  console.log(Component);
  return (
    <div className={`ad_main ${className}`}>
      <div className="ad_tabs">
        <div
          className={`ad_option ${
            activeComponent == "SessionOverview" ? "active" : ""
          }`}
          onClick={() => {
            setActiveComponent("SessionOverview");
          }}
        >
          <div className="ad_optionDesc">
            <span className="ad_descAccent">Session</span> Overview
          </div>
        </div>
        <div className="ad_option">
          <div className="ad_optionDesc">
            <span className="ad_descAccent">Telemetry</span> Analysis
          </div>
        </div>
        <div
          className={`ad_option ${
            activeComponent == "StintAnalysis" ? "active" : ""
          }`}
          onClick={() => {
            setActiveComponent("StintAnalysis");
          }}
        >
          <div className="ad_optionDesc">
            <span className="ad_descAccent">Stint</span> Analysis
          </div>
        </div>
        <div className="ad_option">
          <div className="ad_optionDesc">
            <span className="ad_descAccent">Track</span> Dominance
          </div>
        </div>
        <div className="ad_option">
          <div className="ad_optionDesc">
            <span className="ad_descAccent">Pace</span> Analysis
          </div>
        </div>
        <div className="ad_option">
          <div className="ad_optionDesc">
            <span className="ad_descAccent">Cornering</span> Performance
          </div>
        </div>
      </div>
      <div className={`${data ? "open" : ""} ad_compSpace`}>
        {Component ? <Component /> : <div></div>}
      </div>
    </div>
  );
}
