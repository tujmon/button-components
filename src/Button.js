import React from "react";

import { ButtonFill, ButtonOutline, ButtonGhost } from "./buttonStyles";
import { SIZES } from "./constants";

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
      throw new Error(`Unrecognized Button variant: ${variant}`);
  }
};

export default Button;
