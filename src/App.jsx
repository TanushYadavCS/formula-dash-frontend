import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { useEffect, useRef } from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Home from "./pages/Home";
import Standings from "./pages/Standings";
import Analysis from "./pages/Analysis";
import Telemetry from "./pages/Telemetry";
import Plots from "./pages/Plots";
function App() {
  const appRef = useRef(null);
  useEffect(() => {
    appRef.current.scrollIntoView({ block: "start" });
  });
  return (
    <Router>
      <div className="body">
        <Sidebar />
        <main id="content" className="" ref={appRef}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/standings" element={<Standings />} />
            <Route path="/analysis" element={<Analysis />} />
            <Route path="/telemetry" element={<Telemetry />} />
            <Route path="/plots" element={<Plots />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
