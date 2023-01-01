import { useProductData } from "../services/product-context";
import "./product-display-list.scss";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { OpenInFullIcon } from "../../../components/custom-icons";
import { FunctionComponent } from "react";
import ProductFormsComponent from "../form/product-forms-component";

type ProductDisplayListProps = {
  selectProducts: (id: number) => void;
};

const ProductDisplayList: FunctionComponent<ProductDisplayListProps> = ({
  selectProducts,
}) => {
  const { productData, reArrangeProductData } = useProductData();

  return (
    <div>
      <div className="product-display-header-container">
        <div className="product-header">Product</div>
        <div className="discount-header">Discout</div>
      </div>

      <DragDropContext
        onDragEnd={(params) => {
          console.log(params);
          reArrangeProductData(params.source.index, params?.destination?.index);
        }}
      >
        <Droppable droppableId="droppable-1">
          {(provided, _) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {productData.map((productData: any, key: number) => (
                <div>
                  <Draggable
                    key={key}
                    draggableId={"draggable-" + key}
                    index={key}
                  >
                    {(provided, _) => (
                      <div ref={provided.innerRef} {...provided.draggableProps}>
                        {Object.keys(productData).length === 0 &&
                        productData.constructor === Object ? (
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <div
                              {...provided.dragHandleProps}
                              style={{
                                alignSelf: "start",
                                marginTop: "0.7rem",
                                width: "4%",
                              }}
                            >
                              <OpenInFullIcon
                                fill="#00000080"
                                width="12"
                                height="26"
                              />
                            </div>
                            <div style={{ width: "96%" }}>
                              <ProductFormsComponent
                                isEmpty={true}
                                productData={productData}
                                keyIndex={key}
                                selectProducts={() => selectProducts(key)}
                              />
                            </div>
                          </div>
                        ) : (
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <div
                              {...provided.dragHandleProps}
                              style={{
                                alignSelf: "start",
                                marginTop: "0.7rem",
                                width: "4%",
                              }}
                            >
                              <OpenInFullIcon
                                fill="#00000080"
                                width="12"
                                height="26"
                              />
                            </div>
                            <div style={{ width: "96%" }}>
                              <ProductFormsComponent
                                isEmpty={false}
                                productData={productData}
                                keyIndex={key}
                                selectProducts={() => selectProducts(key)}
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </Draggable>
                </div>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default ProductDisplayList;
