import { useState, useEffect } from 'react';
import './flip-clock.css';

// function component
const AnimatedCard = ({ animation, digit }: { animation: string; digit: string | number }) => {
  return(
    <div className={`flipCard ${animation}`}>
      <span>{digit}</span>
    </div>
  );
};

// function component
const StaticCard = ({ position, digit }: { position: string; digit: string | number }) => {
  return(
    <div className={position}>
      <span>{digit}</span>
    </div>
  );
};

// function component
const FlipUnitContainer = ({ digit, shuffle, unit }: { digit: number; shuffle: boolean; unit: string }) => {	
  
  // assign digit values
  let currentDigit: string | number = digit;
  let previousDigit: string | number = digit - 1;
  // to prevent a negative value
  if ( unit !== 'hours') {
    previousDigit = previousDigit === -1 
      ? 59 
      : previousDigit;
  } else {
    previousDigit = previousDigit === -1 
      ? 23 
      : previousDigit;
  }
  // add zero
  if ( currentDigit < 10 ) {
    currentDigit = `0${currentDigit}`;
  } 
  if ( previousDigit < 10 ) {
    previousDigit = `0${previousDigit}`;
  }
  // shuffle digits
  const digit1 = shuffle 
    ? previousDigit 
    : currentDigit;
  const digit2 = !shuffle 
    ? previousDigit 
    : currentDigit;
  // shuffle animations
  const animation1 = shuffle 
    ? 'fold' 
    : 'unfold';
  const animation2 = !shuffle 
    ? 'fold' 
    : 'unfold';
  return(
    <div className={'flipUnitContainer'}>
      <StaticCard 
        position={'upperCard'} 
        digit={currentDigit} 
        />
      <StaticCard 
        position={'lowerCard'} 
        digit={previousDigit} 
        />
      <AnimatedCard 
        digit={digit1}
        animation={animation1}
        />
      <AnimatedCard 
        digit={digit2}
        animation={animation2}
        />
    </div>
  );
};

// functional component
const FlipClock = () => {
  const [hours, setHours] = useState(0);
  const [hoursShuffle, setHoursShuffle] = useState(true);
  const [minutes, setMinutes] = useState(0);
  const [minutesShuffle, setMinutesShuffle] = useState(true);
  const [seconds, setSeconds] = useState(0);
  const [secondsShuffle, setSecondsShuffle] = useState(true);

  const updateTime = () => {
    // get new date
    const time = new Date();
    // set time units
    const newHours = time.getHours();
    const newMinutes = time.getMinutes();
    const newSeconds = time.getSeconds();
    
    // on hour change, update hours and shuffle state
    if(newHours !== hours) {
      setHours(newHours);
      setHoursShuffle(prev => !prev);
    }
    // on minute change, update minutes and shuffle state
    if(newMinutes !== minutes) {
      setMinutes(newMinutes);
      setMinutesShuffle(prev => !prev);
    }
    // on second change, update seconds and shuffle state
    if(newSeconds !== seconds) {
      setSeconds(newSeconds);
      setSecondsShuffle(prev => !prev);
    }
  };

  useEffect(() => {
    const timerID = setInterval(updateTime, 50);
    
    return () => {
      clearInterval(timerID);
    };
  }, [hours, minutes, seconds]); // dependencies needed for comparison

  return(
    <div className={'flipClock'}>
      <FlipUnitContainer 
        unit={'hours'}
        digit={hours} 
        shuffle={hoursShuffle} 
        />
      <FlipUnitContainer 
        unit={'minutes'}
        digit={minutes} 
        shuffle={minutesShuffle} 
        />
      <FlipUnitContainer 
        unit={'seconds'}
        digit={seconds} 
        shuffle={secondsShuffle} 
        />
    </div>
  );
};

export default FlipClock;