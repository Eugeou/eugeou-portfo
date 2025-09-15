import { AnimatedCard } from "./animated-card";
import { StaticCard } from "./static-card";

export const FlipUnitContainer = ({
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