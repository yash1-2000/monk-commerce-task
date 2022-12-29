import { FunctionComponent, ReactElement, ReactNode } from "react";

type ButtonVarient = "filled" | "outelined";

type textDisplayComponentProps = {
  height?: string;
  width?: string;
  varient?: ButtonVarient;
  fillColour?: string;
  children: ReactNode;
};

const getVarientClass = (
  fillColour: string,
  varient?: ButtonVarient
): Partial<CSSStyleDeclaration> => {
  if (!varient || varient === "filled") {
    return {
      backgroundColor: fillColour,
      color: "white",
      border: "none",
    };
  } else {
    return {
      border: `1px solid ${fillColour}`,
      color: fillColour,
      background: "none",
    };
  }
};

const getButtonStyles = (
  height?: string,
  width?: string,
  fillColour?: string,
  varient?: ButtonVarient
): any => {
  const getStyleByVarient = getVarientClass(fillColour ?? "grey", varient);
  return {
    height: `${height ?? "100%"}`,
    width: `${width ?? "100%"}`,
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
    padding: "0 1rem",
    marginLeft: "10px",
    ...getStyleByVarient,
  };
};

const ButtonComponent: FunctionComponent<textDisplayComponentProps> = ({
  height,
  width,
  varient,
  fillColour,
  children,
}): ReactElement => {
  const styleObj = getButtonStyles(height, width, fillColour, varient);
  return <button style={styleObj}>{children}</button>;
};

export default ButtonComponent;
