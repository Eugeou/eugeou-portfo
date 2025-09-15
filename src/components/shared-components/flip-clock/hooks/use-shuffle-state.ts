import { useState, useEffect } from "react";

export const useShuffleState = (hours: number, minutes: number, seconds: number) => {
  const [hoursShuffle, setHoursShuffle] = useState(true);
  const [minutesShuffle, setMinutesShuffle] = useState(true);
  const [secondsShuffle, setSecondsShuffle] = useState(true);

  useEffect(() => {
    setHoursShuffle((prev) => !prev);
  }, [hours]);

  useEffect(() => {
    setMinutesShuffle((prev) => !prev);
  }, [minutes]);

  useEffect(() => {
    setSecondsShuffle((prev) => !prev);
  }, [seconds]);

  return { hoursShuffle, minutesShuffle, secondsShuffle };
};
