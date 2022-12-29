import { FunctionComponent, useEffect, useState } from "react";
import { DownArrowIcon } from "../custom-icons";
import "./select-component.scss";

type TextInputComponentVarient = "sharp" | "rounded";

type textDisplayComponentProps = {
  varient?: TextInputComponentVarient;
};

const getVarientClass = (varient?: TextInputComponentVarient): string => {
  if (!varient || varient === "sharp") {
    return "select-sharp";
  } else {
    return "select-rounded";
  }
};

const Items = ["flat", "%off"];

const SelectInputComponent: FunctionComponent<textDisplayComponentProps> = ({
  varient,
}) => {
  const [showItems, SetShowItems] = useState(false);
  const [selectedItems, SetSelectedItems] = useState(Items[0]);

  const dropDown = () => {
    SetShowItems((prevState) => !prevState);
  };

  const selectItem = (item: string) => {
    console.log(item);
    SetSelectedItems(() => item);
    SetShowItems(false);
    console.log(selectedItems);
  };

  useEffect(() => {
    console.log("effect", selectedItems);
  }, [selectedItems]);

  return (
    <div>
      <div className="select-box--box">
        <div className={`select-box--container ${getVarientClass(varient)}`}>
          <div className="select-box-container">
            <div className="select-box--selected-item">{selectedItems}</div>
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
