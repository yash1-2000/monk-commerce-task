import { FunctionComponent, useEffect, useState } from "react";
import { useEffectAfterInitialRender } from "../../hooks/custom-effect";
import { DownArrowIcon } from "../custom-icons";
import "./select-component.scss";

type TextInputComponentVarient = "sharp" | "rounded";

type textDisplayComponentProps = {
  variant?: TextInputComponentVarient;
  onChange?: (e: any) => void;
  fieldName?: string;
  value?: string;
};

const getVarientClass = (variant?: TextInputComponentVarient): string => {
  if (!variant || variant === "sharp") {
    return "select-sharp";
  } else {
    return "select-rounded";
  }
};

const Items = ["flat", "%off"];

const SelectInputComponent: FunctionComponent<textDisplayComponentProps> = ({
  variant,
  onChange,
  fieldName,
  value,
}) => {
  const [showItems, SetShowItems] = useState(false);
  const [selectedItems, SetSelectedItems] = useState(value);

  const dropDown = () => {
    SetShowItems((prevState) => !prevState);
  };

  const selectItem = (item: string) => {
    SetSelectedItems(() => item);
    SetShowItems(false);
  };

  useEffectAfterInitialRender(() => {
    if (onChange) {
      onChange({
        target: {
          name: fieldName,
          value: selectedItems,
        },
      });
    }
  }, [selectedItems]);

  return (
    <div>
      <div className="select-box--box">
        <div className={`select-box--container ${getVarientClass(variant)}`}>
          <div className="select-box-container">
            <div className="select-box--selected-item">{value}</div>
            <div className="drop-arrow" onClick={dropDown}>
              <DownArrowIcon fill="#00000066" height="16" width="16" />
            </div>
          </div>

          <div
            style={{ display: showItems ? "block" : "none" }}
            className={"select-box--items"}
          >
            {Items.map((item, key) => (
              <div
                key={key}
                onClick={() => selectItem(item)}
                className={`${
                  selectedItems === item ? "selected" : ""
                } drop-item`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectInputComponent;
