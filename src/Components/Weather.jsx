import "./css/Weather.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { getRace } from "../utils";
import circuits from "../data/circuits.json";
export default function Weather() {
  const currentRace = getRace(circuits);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.open-meteo.com/v1/forecast?latitude=${
          currentRace.coordinates.lat
        }&longitude=${
          currentRace.coordinates.lon
        }&hourly=temperature_2m,precipitation_probability,precipitation,wind_speed_10m,cloud_cover&start_date=${currentRace.sessions.race.slice(
          0,
          10
        )}&end_date=${currentRace.sessions.race.slice(0, 10)}`
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="we_content">
      <div className="we_header">
        Race<span className="we_headerText"> Forecast</span>
      </div>
      <div className="we_body">
        {data.hourly ? (
          <div className="we_weather">
            <div className="we_weatherComponent">
              <span className="we_desc">Temp.</span>
              <span className="we_weatherData">
                {Math.min(
                  data.hourly.temperature_2m[
                    new Date(currentRace.sessions.race).getUTCHours() - 1
                  ],
                  data.hourly.temperature_2m[
                    new Date(currentRace.sessions.race).getUTCHours()
                  ],
                  data.hourly.temperature_2m[
                    new Date(currentRace.sessions.race).getUTCHours() + 1
                  ],
                  data.hourly.temperature_2m[
                    new Date(currentRace.sessions.race).getUTCHours() + 2
                  ]
                )}{" "}
                {data.hourly_units.temperature_2m} -{" "}
                {Math.max(
                  data.hourly.temperature_2m[
                    new Date(currentRace.sessions.race).getUTCHours() - 1
                  ],
                  data.hourly.temperature_2m[
                    new Date(currentRace.sessions.race).getUTCHours()
                  ],
                  data.hourly.temperature_2m[
                    new Date(currentRace.sessions.race).getUTCHours() + 1
                  ],
                  data.hourly.temperature_2m[
                    new Date(currentRace.sessions.race).getUTCHours() + 2
                  ]
                )}{" "}
                {data.hourly_units.temperature_2m}
              </span>
            </div>
            <div className="we_weatherComponent">
            <span className="we_desc">Rain (%)</span>
              <span className="we_weatherData">
                {Math.max(
                  data.hourly.precipitation_probability[
                    new Date(currentRace.sessions.race).getUTCHours() - 1
                  ],
                  data.hourly.precipitation_probability[
                    new Date(currentRace.sessions.race).getUTCHours()
                  ],
                  data.hourly.precipitation_probability[
                    new Date(currentRace.sessions.race).getUTCHours() + 1
                  ],
                  data.hourly.precipitation_probability[
                    new Date(currentRace.sessions.race).getUTCHours() + 2
                  ]
                )}
                {data.hourly_units.precipitation_probability}
              </span>
            </div>
            <div className="we_weatherComponent">
            <span className="we_desc">Rain (mm)</span>
              <span className="we_weatherData">
                {Math.max(
                  data.hourly.precipitation[
                    new Date(currentRace.sessions.race).getUTCHours() - 1
                  ],
                  data.hourly.precipitation[
                    new Date(currentRace.sessions.race).getUTCHours()
                  ],
                  data.hourly.precipitation[
                    new Date(currentRace.sessions.race).getUTCHours() + 1
                  ],
                  data.hourly.precipitation[
                    new Date(currentRace.sessions.race).getUTCHours() + 2
                  ]
                )}{" "}
                {data.hourly_units.precipitation}
              </span>
            </div>
            <div className="we_weatherComponent">
            <span className="we_desc">Wind (km/h)</span>
              <span className="we_weatherData">
                {Math.max(
                  data.hourly.wind_speed_10m[
                    new Date(currentRace.sessions.race).getUTCHours() - 1
                  ],
                  data.hourly.wind_speed_10m[
                    new Date(currentRace.sessions.race).getUTCHours()
                  ],
                  data.hourly.wind_speed_10m[
                    new Date(currentRace.sessions.race).getUTCHours() + 1
                  ],
                  data.hourly.wind_speed_10m[
                    new Date(currentRace.sessions.race).getUTCHours() + 2
                  ]
                )}{" "}
                {data.hourly_units.wind_speed_10m}
              </span>
            </div>
            <div className="we_weatherComponent">
            <span className="we_desc">Cloud cover</span>
              <span className="we_weatherData">
                {Math.max(
                  data.hourly.cloud_cover[
                    new Date(currentRace.sessions.race).getUTCHours() - 1
                  ],
                  data.hourly.cloud_cover[
                    new Date(currentRace.sessions.race).getUTCHours()
                  ],
                  data.hourly.cloud_cover[
                    new Date(currentRace.sessions.race).getUTCHours() + 1
                  ],
                  data.hourly.cloud_cover[
                    new Date(currentRace.sessions.race).getUTCHours() + 2
                  ]
                )}
                {data.hourly_units.cloud_cover}
              </span>
            </div>
          </div>
        ) : (
          <div className="we_noForecast">Forecast not available yet</div>
        )}
      </div>
    </div>
  );
}
