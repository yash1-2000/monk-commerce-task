import { FunctionComponent } from "react";
import "./input.scss";

type TextInputComponentVarient = "sharp" | "rounded";

type textDisplayComponentProps = {
  varient?: TextInputComponentVarient;
};

const getVarientClass = (varient?: TextInputComponentVarient): string => {
  if (!varient || varient === "sharp") {
    return "input-sharp";
  } else {
    return "input-rounded";
  }
};

const TextInputComponent: FunctionComponent<textDisplayComponentProps> = ({
  varient,
}) => {
  return (
    <div className="input-wrapper">
      <input
        className={`input ${getVarientClass(varient)}`}
        type="text"
        placeholder=""
      />
    </div>
  );
};

export default TextInputComponent;
