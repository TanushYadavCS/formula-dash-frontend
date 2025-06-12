import { useEffect, useState } from "react";

export function formatLocalDate(timeString) {
  const date = new Date(timeString);
  const day = Intl.DateTimeFormat(undefined, {
    month: "short",
    day: "numeric",
    weekday: "short",
  }).format(date);
  return day;
}
export function formatLocalTime(timeString) {
  const date = new Date(timeString);
  const time = Intl.DateTimeFormat(undefined, {
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  }).format(date);
  return time;
}
export function getRace(circuits, raceDuration = 3) {
  const currentTime = new Date();
  return (
    circuits.find((circuit) => {
      const raceStart = new Date(circuit.sessions.race);
      const raceEnd = new Date(
        raceStart.getTime() + raceDuration * 60 * 60 * 1000
      );
      return raceEnd >= currentTime;
    }) || circuits[circuits.length - 1]
  );
}
export function getTimeDifference(targetTime) {
  const now = new Date();
  const diff = Math.max(0, targetTime.getTime() - now.getTime());
  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = Math.floor(totalSeconds % 60);
  return { days, hours, minutes, seconds };
}
export function getSessionStatus(sessionTime, sessionDuration = 3) {
  const now = new Date();
  const start = new Date(sessionTime);
  const end = new Date(start.getTime() + sessionDuration * 60 * 60 * 1000);
  if (now < start) return "future";
  if (now >= start && now <= end) return "current";
  return "past";
}
export function useStandings(api) {
  const [standings, setStandings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        setStandings(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setLoading(false);
      });
  }, [api]);

  return { standings, loading };
}
