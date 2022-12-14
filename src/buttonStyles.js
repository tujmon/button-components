import styled from "styled-components";
import { COLORS } from "./constants";

export const Base = styled.button`
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

export const ButtonFill = styled(Base)`
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

export const ButtonOutline = styled(Base)`
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

export const ButtonGhost = styled(Base)`
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
