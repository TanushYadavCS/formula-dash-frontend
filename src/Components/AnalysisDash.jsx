import "../css/AnalysisDash.css";
export default function AnalysisDash() {
  return (
    <div className="ad_main">
      <div className="ad_tabs">
          <div className="ad_option">
            <div className="ad_optionDesc">
              <span className="ad_descAccent">Lap</span> Comparison
            </div>
          </div>
          <div className="ad_option">
            <div className="ad_optionDesc">
              <span className="ad_descAccent">Stint</span> Analysis
            </div> 
          </div>
          <div className="ad_option">
            <div className="ad_optionDesc">
              <span className="ad_descAccent">Telemetry</span> Analysis
            </div>
          </div>
          <div className="ad_option">
            <div className="ad_optionDesc">
              <span className="ad_descAccent">Position</span> Changes
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
    </div>
  );
}
