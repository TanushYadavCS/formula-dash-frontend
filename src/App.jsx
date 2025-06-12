import { use, useState } from "react";
import "./App.css";
import CurrentWeek from "./Components/CurrentWeek";
function handleToggle() {
  const toggleButton = document.getElementById("toggle-btn");
  const sidebar = document.getElementById("sidebar");
  const content = document.getElementById("content");
  toggleButton.classList.toggle("rotate");
  sidebar.classList.toggle("close");
  content.classList.toggle("close");
}
function App() {
  return (
    <div className="body">
      <nav id="sidebar" className="">
        <ul>
          <li className="logo">
            <span className="logo-text">
              Formula<span className="secondary">Dash</span>
            </span>
            <button onClick={handleToggle} id="toggle-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#ffffff"
              >
                <path d="M440-240 200-480l240-240 56 56-183 184 183 184-56 56Zm264 0L464-480l240-240 56 56-183 184 183 184-56 56Z" />
              </svg>
            </button>
          </li>
          <li className="active navbutton">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#ffffff"
              >
                <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
              </svg>
              <span>Home</span>
            </button>
          </li>
          <li className="navbutton">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#ffffff"
              >
                <path d="M160-200h160v-320H160v320Zm240 0h160v-560H400v560Zm240 0h160v-240H640v240ZM80-120v-480h240v-240h320v320h240v400H80Z" />
              </svg>
              <span>Standings</span>
            </button>
          </li>
          <li className="navbutton">
            {" "}
            <button>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#ffffff"
              >
                <path d="M280-280h80v-200h-80v200Zm320 0h80v-400h-80v400Zm-160 0h80v-120h-80v120Zm0-200h80v-80h-80v80ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" />
              </svg>
              <span>Analysis</span>
            </button>
          </li>
          <li className="navbutton">
            {" "}
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#ffffff"
              >
                <path d="m296-320 122-122 80 80 142-141v63h80v-200H520v80h63l-85 85-80-80-178 179 56 56Zm-96 200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" />
              </svg>
              <span>Telemetry</span>
            </button>
          </li>
          <li className="navbutton">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#ffffff"
              >
                <path d="M80-120v-80h800v80H80Zm40-120v-280h120v280H120Zm200 0v-480h120v480H320Zm200 0v-360h120v360H520Zm200 0v-600h120v600H720Z" />
              </svg>
              <span>Plots</span>
            </button>
          </li>
        </ul>
      </nav>
      <main id="content" className="">
        <div className="grid-container">
          <div className="box" style={{gridArea: "currentWeek"}}><CurrentWeek /></div>
          <div className="box" style={{gridArea: "schedule"}}></div>
          <div className="box" style={{gridArea: "wdc"}}></div>
          <div className="box" style={{gridArea: "wcc"}}></div>
          <div className="box" style={{gridArea: "lastSession"}}></div>
          <div className="box" style={{gridArea: "calendar"}}></div>
          <div className="box" style={{gridArea: "countdown"}}></div>
          <div className="box" style={{gridArea: "weather"}}></div>
          <div className="box" style={{gridArea: "podium"}}></div>
          <div className="box" style={{gridArea: "circuitInfo"}}></div>
        </div>
      </main>
    </div>
  );
}

export default App;
