import Statistic from "../Components/Statistic";
import "../css/Analysis.css";
export default function Analysis(){
    return (
       <div className="analysis_main">
            <div className="an_header">
                <span>Test</span>
            </div>
            <div className="an_body">
                <div className="an_stat">
                    <Statistic headerString={"Header"} bodyString={"Body"} footerString={"Footer"} />
                </div>
            </div>
       </div>
    );
}