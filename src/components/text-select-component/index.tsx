import { FunctionComponent } from "react";
import "./text-select-component.scss";

type textDisplayVarient = "sharp" | "rounded";

type textDisplayComponentProps = {
  variant?: textDisplayVarient;
  hasIconBtn?: boolean;
  value?: string;
  onIconClick?: () => void;
};

const getVarientClass = (variant?: textDisplayVarient): string => {
  if (!variant || variant === "sharp") {
    return "text-div-sharp";
  } else {
    return "text-div-rounded";
  }
};

const TextSelectComponent: FunctionComponent<textDisplayComponentProps> = ({
  variant,
  hasIconBtn,
  value,
  onIconClick,
}) => {
  return (
    <div className="input-wrapper">
      <div className={`text-div ${getVarientClass(variant)}`}>
        <span>{value ? value : "Select Product"}</span>
        {hasIconBtn && (
          <div
            className="input-icon-btn"
            onClick={() => {
              onIconClick ? onIconClick() : null;
            }}
          >
            <span className="fa-solid fa-pencil" aria-hidden="true"></span>
          </div>
        )}
      </div>
    </div>
  );
};

export default TextSelectComponent;
