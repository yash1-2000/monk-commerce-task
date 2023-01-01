import { FunctionComponent, memo, useEffect, useRef, useState } from "react";
import ButtonComponent from "../../../components/button-component";
import { CloseIcon, OpenInFullIcon } from "../../../components/custom-icons";
import TextInputComponent from "../../../components/input-component";
import SelectInputComponent from "../../../components/select-component";
import TextSelectComponent from "../../../components/text-select-component";
import { useProductData } from "../services/product-context";
import "./product-display-form.scss";

type ProductDataDisplayFormProps = {
  productData: any;
  keyIndex: number;
  isEmpty?: Boolean;
  selectProducts: () => void;
  updateProductDataState: (val1: string, val2: any) => void;
};

const ProductDisplayForm: FunctionComponent<ProductDataDisplayFormProps> = ({
  productData,
  keyIndex,
  isEmpty,
  selectProducts,
  updateProductDataState,
}) => {
  const {
    removeProduct,
    areProductsRemovable,
    updateOptionTrack,
    optionTrack,
  } = useProductData();

  const showDiscountOptionFun = () => {
    console.log("function rening", productData.title);
    if (isEmpty) {
      return;
    } else {
      return updateOptionTrack(productData.id.toString());
    }
  };

  const updateVariantData = (e: any) => {
    const fieldName = e.target.name;
    const fieValue = e.target.value;

    switch (fieldName) {
      case "amount":
        updateProductDataState("productForm", {
          ...productData,
          discountAmount: Number.isNaN(fieValue)
            ? undefined
            : (fieValue as number),
        });
        break;
      case "type":
        updateProductDataState("productForm", {
          ...productData,
          discountType: parseInt(fieValue) as number,
        });
        break;
      default:
    }
  };
  return (
    <div>
      <div className="product-display-form-conteinar">
        <div className="product-serial-no">{keyIndex + 1}.</div>
        <div className="product-name-area">
          <TextSelectComponent
            variant="sharp"
            hasIconBtn
            value={isEmpty ? null : productData.title}
            onIconClick={selectProducts}
          />
        </div>
        <div className="product-discount-area">
          {isEmpty || !optionTrack.includes(productData.id.toString()) ? (
            <div className="product-discount-form-area">
              <ButtonComponent
                fillColour="#008060"
                variant="filled"
                width="100%"
                height="40px"
                onClick={() => showDiscountOptionFun()}
              >
                Add Discount
              </ButtonComponent>
            </div>
          ) : (
            <div className="product-discount-form-area">
              <div className="product-discount-form-amount-area">
                <TextInputComponent
                  onChange={updateVariantData}
                  fieldName="amount"
                  variant="sharp"
                  value={productData.discountAmount}
                />
              </div>
              <div className="product-discount-form-offer-dropdown">
                <SelectInputComponent
                  onChange={updateVariantData}
                  fieldName="type"
                  variant="sharp"
                  value={productData.discountType}
                />
              </div>
            </div>
          )}
        </div>
        {areProductsRemovable ? (
          <div
            className="product-removeIcon"
            onClick={() => removeProduct(keyIndex)}
          >
            <CloseIcon fill="#00000066" />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default memo(ProductDisplayForm);
