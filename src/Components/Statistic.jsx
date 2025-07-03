import "../css/Statistic.css";
export default function Statistic(props){
    return (
        <div className="stat_content">
            <div className="stat_header">
                <span>{props.headerString}</span>
            </div>
            <div className="stat_body">
                <span>{props.bodyString}</span>
            </div>
            <div className="stat_footer">
                <span>{props.footerString}</span>
            </div>
        </div>
    );
}