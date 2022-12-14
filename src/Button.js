import React from "react";
import styled from "styled-components";

import { COLORS } from "./constants";

const SIZES = {
  small: {
    "--borderRadius": 2 + "px",
    "--padding": "8px 16px",
    "--fontSize": 16 / 16 + "rem"
  },
  medium: {
    "--borderRadius": 2 + "px",
    "--padding": "16px 24px",
    "--fontSize": 18 / 16 + "rem"
  },
  large: {
    "--borderRadius": 4 + "px",
    "--padding": "20px 36px",
    "--fontSize": 21 / 16 + "rem"
  }
};

const Button = ({ variant, size, children }) => {
  const style = SIZES[size];
  switch (variant) {
    case "fill":
      return <ButtonFill style={style}>{children}</ButtonFill>;
    case "outline":
      return <ButtonOutline style={style}>{children}</ButtonOutline>;
    case "ghost":
      return <ButtonGhost style={style}>{children}</ButtonGhost>;
    default:
      return null;
  }
};

const Base = styled.button`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  border-radius: var(--borderRadius);
  letter-spacing: -0.02em;
  padding: var(--padding);
  font-size: var(--fontSize);
  &:focus {
    outline-offset: 4px;
  }
`;

const ButtonFill = styled(Base)`
  background-color: ${COLORS.primary};
  color: ${COLORS.white};
  border: none;
  &:hover {
    background-color: ${COLORS.primaryLight};
  }
  &:focus {
    outline-color: ${COLORS.primary};
  }
`;

const ButtonOutline = styled(Base)`
  background-color: ${COLORS.white};
  color: ${COLORS.primary};
  border: 2px solid ${COLORS.primary};
  &:focus {
    outline-color: ${COLORS.primary};
  }

  &:hover {
    background-color: ${COLORS.offwhite};
  }
`;

const ButtonGhost = styled(Base)`
  background-color: transparent;
  color: ${COLORS.transparentGray75};
  border: none;
  &:hover {
    color: ${COLORS.black};
    background-color: ${COLORS.transparentGray15};
  }
  &:focus {
    outline-color: ${COLORS.transparentGray75};
  }
`;

export default Button;
