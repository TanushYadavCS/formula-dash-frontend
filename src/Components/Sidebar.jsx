import { NavLink } from "react-router-dom";

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("preferredTeam");
  if (savedTheme) {
    changeTheme(savedTheme);
  }
});
function changeTheme(team) {
  document.documentElement.style.setProperty(
    "--accent",
    `var(--${team}-accent)`
  );
  document.documentElement.style.setProperty(
    "--secondary-accent",
    `var(--${team}-sec)`
  );
  localStorage.setItem("preferredTeam", team);
}
function handleToggle() {
  const toggleButton = document.getElementById("toggle-btn");
  const sidebar = document.getElementById("sidebar");
  const content = document.getElementById("content");
  toggleButton.classList.toggle("rotate");
  sidebar?.classList.toggle("close");
  content?.classList.toggle("close");
}

function handleDropdown() {
  const dropdownSubmenu = document.getElementsByClassName("submenu")[0];
  const dropdownButton = document.getElementsByClassName("dropButton")[0];
  dropdownSubmenu.classList.toggle("show");
  dropdownButton.classList.toggle("show");
}
export default function Sidebar() {
  return (
    <nav id="sidebar" className="">
      <ul>
        <li className="logo">
          <span className="logo-text">
            Formula<span className="secondary">Dash</span>
          </span>
          <button onClick={handleToggle} id="toggle-btn" className="navigate">
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
        <li className="navbutton">
          <NavLink to="/" className="navigate">
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
          </NavLink>
        </li>
        <li className="navbutton">
          <NavLink to="/standings" className="navigate">
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
          </NavLink>
        </li>
        <li className="navbutton">
          {" "}
          <NavLink to="/analysis" className="navigate">
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
          </NavLink>
        </li>
        <li className="navbutton">
          {" "}
          <NavLink to="/telemetry" className="navigate">
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
          </NavLink>
        </li>
        <li className="navbutton">
          <NavLink to="/plots" className="navigate">
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
          </NavLink>
        </li>
        <li className="navbutton">
          <button onClick={handleDropdown} className="dropButton navigate">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#ffffff"
            >
              <path d="M360-720h80v-80h-80v80Zm160 0v-80h80v80h-80ZM360-400v-80h80v80h-80Zm320-160v-80h80v80h-80Zm0 160v-80h80v80h-80Zm-160 0v-80h80v80h-80Zm160-320v-80h80v80h-80Zm-240 80v-80h80v80h-80ZM200-160v-640h80v80h80v80h-80v80h80v80h-80v320h-80Zm400-320v-80h80v80h-80Zm-160 0v-80h80v80h-80Zm-80-80v-80h80v80h-80Zm160 0v-80h80v80h-80Zm80-80v-80h80v80h-80Z" />
            </svg>
            <span>Theme</span>
            <svg
              className="dropdownsvg"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#ffffff"
            >
              <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
            </svg>
          </button>
          <ul className="submenu">
            <div className="submenu_div">
              <li className="submenu-item">
                <button
                  className="submenu_button"
                  onClick={() => changeTheme("ferrari")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="var(--ferrari-accent)"
                  >
                    <path d="M160-440v-80h640v80H160Z" />
                  </svg>
                  <span>Ferrari</span>
                </button>
              </li>
              <li className="submenu-item">
                <button
                  className="submenu_button"
                  onClick={() => changeTheme("mercedes")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="var(--mercedes-accent)"
                  >
                    <path d="M160-440v-80h640v80H160Z" />
                  </svg>
                  <span>Mercedes</span>
                </button>
              </li>
              <li className="submenu-item">
                <button
                  className="submenu_button"
                  onClick={() => changeTheme("mclaren")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="var(--mclaren-accent)"
                  >
                    <path d="M160-440v-80h640v80H160Z" />
                  </svg>
                  <span>McLaren</span>
                </button>
              </li>
              <li className="submenu-item">
                <button
                  className="submenu_button"
                  onClick={() => changeTheme("red_bull")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="var(--red_bull-accent)"
                  >
                    <path d="M160-440v-80h640v80H160Z" />
                  </svg>
                  <span>Red Bull</span>
                </button>
              </li>
              <li className="submenu-item">
                <button
                  className="submenu_button"
                  onClick={() => changeTheme("aston_martin")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="var(--aston_martin-accent)"
                  >
                    <path d="M160-440v-80h640v80H160Z" />
                  </svg>
                  <span>Aston Martin</span>
                </button>
              </li>
              <li className="submenu-item">
                <button
                  className="submenu_button"
                  onClick={() => changeTheme("williams")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="var(--williams-accent)"
                  >
                    <path d="M160-440v-80h640v80H160Z" />
                  </svg>
                  <span>Williams</span>
                </button>
              </li>
              <li className="submenu-item">
                <button
                  className="submenu_button"
                  onClick={() => changeTheme("rb")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="var(--rb-accent)"
                  >
                    <path d="M160-440v-80h640v80H160Z" />
                  </svg>
                  <span>Racing Bulls</span>
                </button>
              </li>
              <li className="submenu-item">
                <button
                  className="submenu_button"
                  onClick={() => changeTheme("haas")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="var(--haas-accent)"
                  >
                    <path d="M160-440v-80h640v80H160Z" />
                  </svg>
                  <span>Haas</span>
                </button>
              </li>
              <li className="submenu-item">
                <button
                  className="submenu_button"
                  onClick={() => changeTheme("sauber")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="var(--sauber-accent)"
                  >
                    <path d="M160-440v-80h640v80H160Z" />
                  </svg>
                  <span>Sauber</span>
                </button>
              </li>
              <li className="submenu-item">
                <button
                  className="submenu_button"
                  onClick={() => changeTheme("alpine")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="var(--alpine-accent)"
                  >
                    <path d="M160-440v-80h640v80H160Z" />
                  </svg>
                  <span>Alpine</span>
                </button>
              </li>
              <div className="fadeBottom"></div>
            </div>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
