import Schedule from "../Components/Schedule";
import Calendar from "../Components/Calendar";
import CircuitInfo from "../Components/CircuitInfo";
import Countdown from "../Components/Countdown";
import LastSession from "../Components/LastSession";
import WDC from "../Components/WDC";
import WCC from "../Components/WCC";
export default function Home() {
  return (
    <div className="grid-container">
      <div className="box" style={{ gridArea: "circuitInfo" }}>
        <CircuitInfo />
      </div>
      <div className="box" style={{ gridArea: "schedule" }}>
        <Schedule />
      </div>
      <div className="box" style={{ gridArea: "wdc" }}>
        <WDC />
      </div>
      <div className="box" style={{ gridArea: "wcc" }}>
        <WCC />
      </div>
      <div className="box" style={{ gridArea: "lastSession" }}>
        <LastSession />
      </div>
      <div className="box" style={{ gridArea: "calendar" }}>
        <Calendar />
      </div>
      <div className="box" style={{ gridArea: "countdown" }}>
        <Countdown />
      </div>
    </div>
  );
}
