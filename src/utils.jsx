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
export function formatLocalDateNoDay(timeString) {
  const date = new Date(timeString);
  const day = Intl.DateTimeFormat(undefined, {
    month: "short",
    day: "2-digit",
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
export function getPreviousRace(circuits, raceDuration = 3) {
  const currentTime = new Date();
  const pastRaces = circuits.filter((circuit) => {
    const raceStart = new Date(circuit.sessions.race);
    const raceEnd = new Date(
      raceStart.getTime() + raceDuration * 60 * 60 * 1000
    );
    return raceEnd < currentTime;
  });
  return pastRaces[pastRaces.length - 1] || circuits[0];
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

export function differenceInWeeks(weekend1, weekend2) {
  weekend1 = weekend1.slice(0, 10);
  weekend1 = Date.parse(weekend1);
  weekend2 = weekend2.slice(0, 10);
  weekend2 = Date.parse(weekend2);
  const weeksInBetween = Math.floor(
    (weekend2 - weekend1) / (1000 * 3600 * 24 * 7)
  );
  return weeksInBetween;
}

export function calendarGenerator() {
  let dateArray = [];
  let gapsArray = [];
  let calendarArray = [];
  let roundNo = 0;
  while (roundNo < circuits.length) {
    dateArray.push({
      round: circuits[roundNo].round,
      startDate: circuits[roundNo].sessions.practice_1.slice(0, 10),
      endDate: circuits[roundNo].sessions.race.slice(0, 10),
      name: circuits[roundNo].name,
      weekendType: circuits[roundNo].weekend_type,
    });
    roundNo = roundNo + 1;
  }
  roundNo = 0;
  while (roundNo < circuits.length - 1) {
    gapsArray.push({
      gap:
        differenceInWeeks(
          dateArray[roundNo].endDate,
          dateArray[roundNo + 1].endDate
        ) - 1,
    });
    roundNo = roundNo + 1;
  }
  for (let i = 0; i < circuits.length; i++) {
    calendarArray.push(dateArray[i]);
    if (i < gapsArray.length) {
      calendarArray.push(gapsArray[i]);
    }
  }
  for (let i = 0; i < calendarArray.length; i++) {
    if (calendarArray[i].gap == 0) {
      calendarArray.splice(i, 1);
    }
  }
  calendarArray = JSON.stringify(calendarArray);
  console.log(calendarArray);
}

