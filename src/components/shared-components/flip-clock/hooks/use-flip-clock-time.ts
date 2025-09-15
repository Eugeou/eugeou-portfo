import { useState, useEffect } from "react";

export const useFlipClockTime = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const updateTime = () => {
    const time = new Date();
    const newHours = time.getHours();
    const newMinutes = time.getMinutes();
    const newSeconds = time.getSeconds();

    // on hour change, update hours
    if (newHours !== hours) {
      setHours(newHours);
    }
    // on minute change, update minutes
    if (newMinutes !== minutes) {
      setMinutes(newMinutes);
    }
    // on second change, update seconds
    if (newSeconds !== seconds) {
      setSeconds(newSeconds);
    }
  };

  useEffect(() => {
    const timerID = setInterval(updateTime, 50);
    return () => {
      clearInterval(timerID);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hours, minutes, seconds]);

  return { hours, minutes, seconds };
};
