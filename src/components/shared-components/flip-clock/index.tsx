import "./flip-clock.css";
import { FlipClockProps } from "./types";
import { useCheckMobile, useFlipClockTime, useShuffleState } from "./hooks";
import { defaultProps } from "./constants";
import { FlipUnitContainer } from "./components";

const FlipClock = (props: FlipClockProps) => {
  const {
    width,
    height,
    padding,
    borderRadius,
    opacity,
    colonWidth,
    colonHeight,
    colonFontSize,
    colonDotSize,
    unitWidth,
    unitHeight,
    unitBorderRadius,
    unitMargin,
    digitFontSize,
    fontFamily,
    backgroundColor,
    cardBackgroundColor,
    digitColor,
    colonColor,
    borderColor,
    shadowColor,
  } = { ...defaultProps, ...props };
  
  const { hours, minutes, seconds } = useFlipClockTime();
  const { hoursShuffle, minutesShuffle, secondsShuffle } = useShuffleState(hours, minutes, seconds);
  const { isMobile } = useCheckMobile();

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
    "--flip-clock-font-family": fontFamily,
    // Color CSS variables
    "--flip-clock-background-color": backgroundColor,
    "--flip-clock-card-background-color": cardBackgroundColor,
    "--flip-clock-digit-color": digitColor,
    "--flip-clock-colon-color": colonColor,
    "--flip-clock-border-color": borderColor,
    "--flip-clock-shadow-color": shadowColor,
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
