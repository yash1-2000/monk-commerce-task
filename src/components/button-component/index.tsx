import { FunctionComponent, ReactElement, ReactNode } from "react";

type Buttonvariant = "filled" | "outelined";

type textDisplayComponentProps = {
  height?: string;
  width?: string;
  variant?: Buttonvariant;
  fillColour?: string;
  onClick?: (e: any) => void;
  children: ReactNode;
};

const getvariantClass = (
  fillColour: string,
  variant?: Buttonvariant
): Partial<CSSStyleDeclaration> => {
  if (!variant || variant === "filled") {
    return {
      backgroundColor: fillColour,
      color: "white",
      border: "none",
    };
  } else {
    return {
      border: `2px solid ${fillColour}`,
      color: fillColour,
      background: "none",
    };
  }
};

const getButtonStyles = (
  height?: string,
  width?: string,
  fillColour?: string,
  variant?: Buttonvariant
): any => {
  const getStyleByvariant = getvariantClass(fillColour ?? "grey", variant);
  return {
    height: `${height ?? "100%"}`,
    width: `${width ?? "100%"}`,
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight:'600',
    padding: "0 1rem",
    marginLeft: "10px",
    ...getStyleByvariant,
  };
};

const ButtonComponent: FunctionComponent<textDisplayComponentProps> = ({
  height,
  width,
  variant,
  fillColour,
  children,
  onClick,
}): ReactElement => {
  const styleObj = getButtonStyles(height, width, fillColour, variant);
  return (
    <button onClick={onClick} style={styleObj}>
      {children}
    </button>
  );
};

export default ButtonComponent;
