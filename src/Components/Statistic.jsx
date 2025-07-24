import "../css/Statistic.css";
export default function Statistic(props){
    return (
        <div className={`stat_content ${props.className}`}>
            <div className="stat_header">
                <div>{props.headerDiv}</div>
            </div>
            <div className="stat_body">
                <div>{props.bodyDiv}</div>
            </div>
            <div className="stat_footer">
                <div>{props.footerDiv}</div>
            </div>
        </div>
    );
}