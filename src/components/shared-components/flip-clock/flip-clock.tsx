import { useState, useEffect } from "react";
import "./flip-clock.css";
import { useCheckMobile } from "@/hooks/use-check-mobile";
import { FlipClockProps } from "@/types";

const AnimatedCard = ({
  animation,
  digit,
}: {
  animation: string;
  digit: string | number;
}) => {
  return (
    <div className={`flipCard ${animation}`}>
      <span>{digit}</span>
    </div>
  );
};

const StaticCard = ({
  position,
  digit,
}: {
  position: string;
  digit: string | number;
}) => {
  return (
    <div className={position}>
      <span>{digit}</span>
    </div>
  );
};

const FlipUnitContainer = ({
  digit,
  shuffle,
  unit,
  className = "",
}: {
  digit: number;
  shuffle: boolean;
  unit: string;
  className?: string;
}) => {
  // assign digit values
  let currentDigit: string | number = digit;
  let previousDigit: string | number = digit - 1;
  // to prevent a negative value
  if (unit !== "hours") {
    previousDigit = previousDigit === -1 ? 59 : previousDigit;
  } else {
    previousDigit = previousDigit === -1 ? 23 : previousDigit;
  }
  // add zero
  if (currentDigit < 10) {
    currentDigit = `0${currentDigit}`;
  }
  if (previousDigit < 10) {
    previousDigit = `0${previousDigit}`;
  }
  // shuffle digits
  const digit1 = shuffle ? previousDigit : currentDigit;
  const digit2 = !shuffle ? previousDigit : currentDigit;
  // shuffle animations
  const animation1 = shuffle ? "fold" : "unfold";
  const animation2 = !shuffle ? "fold" : "unfold";
  return (
    <div className={`flipUnitContainer ${className}`}>
      <StaticCard position={"upperCard"} digit={currentDigit} />
      <StaticCard position={"lowerCard"} digit={previousDigit} />
      <AnimatedCard digit={digit1} animation={animation1} />
      <AnimatedCard digit={digit2} animation={animation2} />
    </div>
  );
};

const FlipClock = ({
  width = "200px",
  height = "60px",
  padding = "8px",
  borderRadius = "12px",
  opacity = 1,
  colonWidth = "10px",
  colonHeight = "44px",
  colonFontSize = "1.2em",
  colonDotSize = "4px",
  unitWidth = "40px",
  unitHeight = "44px",
  unitBorderRadius = "8px",
  unitMargin = "4px",
  digitFontSize = "1em",
}: FlipClockProps) => {
  const [hours, setHours] = useState(0);
  const [hoursShuffle, setHoursShuffle] = useState(true);
  const [minutes, setMinutes] = useState(0);
  const [minutesShuffle, setMinutesShuffle] = useState(true);
  const [seconds, setSeconds] = useState(0);
  const [secondsShuffle, setSecondsShuffle] = useState(true);
  const isMobile = useCheckMobile();

  const updateTime = () => {
    const time = new Date();
    const newHours = time.getHours();
    const newMinutes = time.getMinutes();
    const newSeconds = time.getSeconds();

    // on hour change, update hours and shuffle state
    if (newHours !== hours) {
      setHours(newHours);
      setHoursShuffle((prev) => !prev);
    }
    // on minute change, update minutes and shuffle state
    if (newMinutes !== minutes) {
      setMinutes(newMinutes);
      setMinutesShuffle((prev) => !prev);
    }
    // on second change, update seconds and shuffle state
    if (newSeconds !== seconds) {
      setSeconds(newSeconds);
      setSecondsShuffle((prev) => !prev);
    }
  };

  useEffect(() => {
    const timerID = setInterval(updateTime, 50);
    return () => {
      clearInterval(timerID);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hours, minutes, seconds]);

  // Create style object with CSS custom properties
  const clockStyle = {
    "--flip-clock-width": width,
    "--flip-clock-height": height,
    "--flip-clock-padding": padding,
    "--flip-clock-border-radius": borderRadius,
    "--flip-clock-colon-width": colonWidth,
    "--flip-clock-colon-height": colonHeight,
    "--flip-clock-colon-font-size": colonFontSize,
    "--flip-clock-colon-dot-size": colonDotSize,
    "--flip-clock-unit-width": unitWidth,
    "--flip-clock-unit-height": unitHeight,
    "--flip-clock-unit-border-radius": unitBorderRadius,
    "--flip-clock-unit-margin": unitMargin,
    "--flip-clock-digit-font-size": digitFontSize,
    "--flip-clock-opacity": opacity,
  } as React.CSSProperties;

  return (
    <div className={"flipClock"} style={clockStyle}>
      <FlipUnitContainer unit={"hours"} digit={hours} shuffle={hoursShuffle} />
      <div className="colon" />
      <FlipUnitContainer
        unit={"minutes"}
        digit={minutes}
        shuffle={minutesShuffle}
      />
      {!isMobile && (
        <>
          <div className="colon" />
          <FlipUnitContainer
            unit={"seconds"}
            digit={seconds}
            shuffle={secondsShuffle}
          />
        </>
      )}
    </div>
  );
};

export default FlipClock;
