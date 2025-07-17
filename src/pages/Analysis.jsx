import AnalysisDash from "../Components/AnalysisDash";
import SessionSelector from "../Components/SessionSelector";
import "../css/Analysis.css";
export default function Analysis() {
 return (
  <div className="analysis_main">
      <div className="an_scHeader">
        <span>
          <span className="an_scHeaderAccent">Session</span> Analysis
        </span>
      </div>{" "}
      <SessionSelector />
      <AnalysisDash />
      </div>
 );
 
}
