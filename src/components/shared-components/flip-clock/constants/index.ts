import { FlipClockProps } from "../types";

const WIDTH = "200px";
const HEIGHT = "60px";
const PADDING = "10px";
const BORDER_RADIUS = "8px";
const COLON_WIDTH = "20px";
const COLON_HEIGHT = "40px";
const COLON_FONT_SIZE = "24px";
const COLON_DOT_SIZE = "6px";
const UNIT_WIDTH = "40px";
const UNIT_HEIGHT = "50px";
const UNIT_BORDER_RADIUS = "12px";
const UNIT_MARGIN = "5px";
const DIGIT_FONT_SIZE = "32px";
const OPACITY = 0.9;
const FONT_FAMILY = "monospace";

// Color constants
const BACKGROUND_COLOR = "white";
const CARD_BACKGROUND_COLOR = "#1a1a1a";
const DIGIT_COLOR = "white";
const COLON_COLOR = "#333";
const BORDER_COLOR = "#333";
const SHADOW_COLOR = "rgba(0, 0, 0, 0.3)";

export const defaultProps: FlipClockProps = {
  width : WIDTH,
  height : HEIGHT,
  padding : PADDING,
  borderRadius : BORDER_RADIUS,
  colonWidth : COLON_WIDTH,
  colonHeight : COLON_HEIGHT,
  colonFontSize : COLON_FONT_SIZE,
  colonDotSize : COLON_DOT_SIZE,
  unitWidth : UNIT_WIDTH,
  unitHeight : UNIT_HEIGHT,
  unitBorderRadius : UNIT_BORDER_RADIUS,
  unitMargin : UNIT_MARGIN,
  digitFontSize : DIGIT_FONT_SIZE,
  opacity : OPACITY,
  fontFamily : FONT_FAMILY,
  // Color props
  backgroundColor : BACKGROUND_COLOR,
  cardBackgroundColor : CARD_BACKGROUND_COLOR,
  digitColor : DIGIT_COLOR,
  colonColor : COLON_COLOR,
  borderColor : BORDER_COLOR,
  shadowColor : SHADOW_COLOR,
} ;
