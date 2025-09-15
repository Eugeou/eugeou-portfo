import FlipClock from ".";

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

      <h2>Blue Theme Flip Clock</h2>
      <FlipClock
        width="250px"
        height="70px"
        backgroundColor="#e3f2fd"
        cardBackgroundColor="#1976d2"
        digitColor="#ffffff"
        colonColor="#1976d2"
        borderColor="#1565c0"
        shadowColor="rgba(25, 118, 210, 0.3)"
        unitWidth="50px"
        unitHeight="55px"
        digitFontSize="1.3em"
      />

      <h2>Green Theme Flip Clock</h2>
      <FlipClock
        width="250px"
        height="70px"
        backgroundColor="#e8f5e8"
        cardBackgroundColor="#2e7d32"
        digitColor="#ffffff"
        colonColor="#2e7d32"
        borderColor="#1b5e20"
        shadowColor="rgba(46, 125, 50, 0.3)"
        unitWidth="50px"
        unitHeight="55px"
        digitFontSize="1.3em"
      />

      <h2>Purple Theme Flip Clock</h2>
      <FlipClock
        width="250px"
        height="70px"
        backgroundColor="#f3e5f5"
        cardBackgroundColor="#7b1fa2"
        digitColor="#ffffff"
        colonColor="#7b1fa2"
        borderColor="#4a148c"
        shadowColor="rgba(123, 31, 162, 0.3)"
        unitWidth="50px"
        unitHeight="55px"
        digitFontSize="1.3em"
      />

      <h2>Orange Theme Flip Clock</h2>
      <FlipClock
        width="250px"
        height="70px"
        backgroundColor="#fff3e0"
        cardBackgroundColor="#f57c00"
        digitColor="#ffffff"
        colonColor="#f57c00"
        borderColor="#e65100"
        shadowColor="rgba(245, 124, 0, 0.3)"
        unitWidth="50px"
        unitHeight="55px"
        digitFontSize="1.3em"
      />

      <h2>Dark Theme Flip Clock</h2>
      <FlipClock
        width="250px"
        height="70px"
        backgroundColor="#424242"
        cardBackgroundColor="#000000"
        digitColor="#00ff00"
        colonColor="#00ff00"
        borderColor="#333333"
        shadowColor="rgba(0, 255, 0, 0.3)"
        unitWidth="50px"
        unitHeight="55px"
        digitFontSize="1.3em"
      />
    </div>
  );
};

export default FlipClockExample;
