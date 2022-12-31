import { FunctionComponent } from "react";
import "./input.scss";

type TextInputComponentVarient = "sharp" | "rounded";

type textDisplayComponentProps = {
  variant?: TextInputComponentVarient;
  onChange?: (e: any) => void;
  fieldName?: string;
  value?: number;
};

const getVarientClass = (variant?: TextInputComponentVarient): string => {
  if (!variant || variant === "sharp") {
    return "input-sharp";
  } else {
    return "input-rounded";
  }
};

const TextInputComponent: FunctionComponent<textDisplayComponentProps> = ({
  variant,
  onChange,
  fieldName,
  value,
}) => {
  return (
    <div>
      <div className="input-wrapper">
        <input
          className={`input ${getVarientClass(variant)}`}
          type="number"
          placeholder=""
          min="0"
          value={value === undefined ? "" : value}
          name={fieldName ?? "default"}
          onChange={(e: any) => {
            onChange && onChange(e);
          }}
        />
      </div>
    </div>
  );
};

export default TextInputComponent;
