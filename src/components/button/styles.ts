import styled from "styled-components";
import {
  ButtonStyledProps,
  SetBackground,
  SetWidth,
  SetHeight,
  SetOutline,
} from "./types";

const setWidth = (props: SetWidth) => {
  const { size, round } = props;
  if (round) {
    return "40px";
  } else if (size === "small") {
    return "70px";
  } else if (size === "medium") {
    return "150px";
  } else if (size === "large") {
    return "220px";
  }
  return "fit-content";
};

const setHeight = (props: SetHeight) => {
  const { round } = props;
  if (round) {
    return "40px";
  }
  return "45px";
};

const setBackground = (props: SetBackground) => {
  const { variant, color } = props;
  if (!color) {
    return `var(--${variant})`;
  }
  return color;
};

const setOutline = (props: SetOutline) => {
  const { outlineColor } = props;

  if (outlineColor) {
    return `4px solid ${outlineColor}`;
  }

  return "none";
};

const StyledButton = styled.button<ButtonStyledProps>`
  color: var(--light-font);
  background-color: ${setBackground};
  padding: 10px;
  border: none;
  font-weight: 700;
  font-family: var(--text-font);
  font-size: 20px;
  width: ${setWidth};
  height: ${setHeight};
  line-height: 1;
  border-radius: 80px;
  outline: ${setOutline};
  :hover {
    opacity: 0.8;
  }
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-size: 30px;
    font-weight: bold;
    margin-left: 2px;
  }
`;

export default StyledButton;
