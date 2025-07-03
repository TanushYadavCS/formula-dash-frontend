import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import circuits from "../data/circuits.json";
import { getPreviousRace } from "../utils";
const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const [WDC, setWDC] = useState(null);
  const [WCC, setWCC] = useState(null);
  const [lastSession, setLastSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const prevRace = getPreviousRace(circuits);
  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [WDCRes, WCCRes, lastSessionRes] = await Promise.all([
          axios.get("https://api.jolpi.ca/ergast/f1/2025/driverstandings/"),
          axios.get(
            "https://api.jolpi.ca/ergast/f1/2025/constructorstandings/"
          ),
          axios.get(
            `https://api.jolpi.ca/ergast/f1/2025/${prevRace.round}/results`
          ),
        ]);
        setWDC(WDCRes);
        setWCC(WCCRes);
        setLastSession(lastSessionRes);
      } catch (error) {
        console.error("API Fetch Error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAll();
  }, []);

  return (
    <DataContext.Provider value={{ WDC, WCC, lastSession, loading }}>
      {children}
    </DataContext.Provider>
  );
};
export const useData = () => useContext(DataContext);
