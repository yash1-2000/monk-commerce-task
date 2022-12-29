import { FunctionComponent } from "react";
import "./text-select-component.scss";

type textDisplayVarient = "sharp" | "rounded";

type textDisplayComponentProps = {
  varient?: textDisplayVarient;
  hasIconBtn?: boolean;
};

const getVarientClass = (varient?: textDisplayVarient): string => {
  if (!varient || varient === "sharp") {
    return "text-div-sharp";
  } else {
    return "text-div-rounded";
  }
};

const TextSelectComponent: FunctionComponent<textDisplayComponentProps> = ({
  varient,
  hasIconBtn,
}) => {
  return (
    <div className="input-wrapper">
      <div className={`text-div ${getVarientClass(varient)}`}>
        <span>Select Product</span>
        {hasIconBtn && (
          <div className="input-icon-btn">
            <span className="fa-solid fa-pencil" aria-hidden="true"></span>
          </div>
        )}
      </div>
    </div>
  );
};

export default TextSelectComponent;
