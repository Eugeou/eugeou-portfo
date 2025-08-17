import FlipClock from "./flip-clock";

const FlipClockExample = () => {
  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        alignItems: "center",
      }}
    >
      <h2>Default Flip Clock</h2>
      <FlipClock />

      <h2>Large Flip Clock</h2>
      <FlipClock
        width="400px"
        height="120px"
        padding="16px"
        borderRadius="20px"
        unitWidth="80px"
        unitHeight="88px"
        digitFontSize="2em"
        colonFontSize="2.4em"
        colonDotSize="8px"
      />

      <h2>Small Flip Clock</h2>
      <FlipClock
        width="150px"
        height="45px"
        padding="6px"
        borderRadius="8px"
        unitWidth="30px"
        unitHeight="33px"
        digitFontSize="0.8em"
        colonFontSize="1em"
        colonDotSize="3px"
      />

      <h2>Custom Styled Flip Clock</h2>
      <FlipClock
        width="300px"
        height="80px"
        padding="12px"
        borderRadius="16px"
        unitWidth="60px"
        unitHeight="66px"
        digitFontSize="1.5em"
        colonFontSize="1.8em"
        colonDotSize="6px"
        unitMargin="6px"
      />

      <h2>Transparent Flip Clock</h2>
      <FlipClock
        width="250px"
        height="70px"
        opacity={0.7}
        unitWidth="50px"
        unitHeight="55px"
        digitFontSize="1.3em"
      />

      <h2>Very Transparent Flip Clock</h2>
      <FlipClock
        width="200px"
        height="60px"
        opacity={0.3}
        unitWidth="40px"
        unitHeight="44px"
        digitFontSize="1em"
      />
    </div>
  );
};

export default FlipClockExample;
