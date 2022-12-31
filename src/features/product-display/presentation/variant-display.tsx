import { FunctionComponent, ReactElement, useEffect, useState } from "react";
import {
  DownArrowIcon,
  OpenInFullIcon,
  UpArrowIcon,
} from "../../../components/custom-icons";
import VariantDisplayForm from "./variant-display-form";
import "./variant-display.scss";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useProductData } from "../services/product-context";
import { variantInterface } from "../../../models/variants/variant-model";

type variantDisplayProps = {
  variantArray: any[];
  productIndex: number;
  updateProductDataState: (val1: string, val2: any) => void;
};

const showVariantsFun = (state: boolean, array: any[]) => {
  return state || array.length === 1;
};

const VariantDisplay: FunctionComponent<variantDisplayProps> = ({
  variantArray,
  productIndex,
  updateProductDataState,
}): ReactElement => {
  const [showVariants, SetShowVariants] = useState<boolean>(false);
  const { reArrangeVariantData } = useProductData();

  const updateVariantArray = (
    variantId: number,
    variantData: variantInterface
  ) => {
    const variantsArrayCopy = [...variantArray];
    variantsArrayCopy[variantId] = variantData;
    updateProductDataState("variantsForm", variantsArrayCopy);
  };

  return (
    <div>
      {variantArray.length > 1 && (
        <div className="variant-pan">
          {showVariants ? (
            <div>
              <span
                className="variant-pan-content-container"
                onClick={() => SetShowVariants(false)}
              >
                <p style={{ margin: "0" }}>Hide variants</p>
                <UpArrowIcon fill="#006EFF" height="16" width="16" />
              </span>
            </div>
          ) : (
            <div>
              <span
                className="variant-pan-content-container"
                onClick={() => SetShowVariants(true)}
              >
                <p style={{ margin: "0" }}>Show variants</p>
                <DownArrowIcon fill="#006EFF" height="16" width="16" />
              </span>
            </div>
          )}
        </div>
      )}

      <br />
      {showVariantsFun(showVariants, variantArray) && (
        <DragDropContext
          onDragEnd={(params) => {
            reArrangeVariantData(
              productIndex,
              params.source.index,
              params?.destination?.index
            );
          }}
        >
          <Droppable droppableId="droppable-2">
            {(provided, _) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {variantArray.map((variantData, key) => (
                  <Draggable
                    key={key}
                    draggableId={"draggable-" + key}
                    index={key}
                  >
                    {(provided, _) => (
                      <div ref={provided.innerRef} {...provided.draggableProps}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <div
                            {...provided.dragHandleProps}
                            style={{
                              alignSelf: "start",
                              marginTop: "0.7rem",
                              width: "5%",
                            }}
                          >
                            <OpenInFullIcon
                              fill="#00000080"
                              width="12"
                              height="26"
                            />
                          </div>

                          <div style={{ width: "95%" }}>
                            <VariantDisplayForm
                              variantData={variantData}
                              productIndex={productIndex}
                              variantIndex={key}
                              updateVariantArray={updateVariantArray}
                              {...provided.dragHandleProps}
                            />
                            <br />
                          </div>
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      )}
    </div>
  );
};

export default VariantDisplay;
