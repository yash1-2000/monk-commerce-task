import { FunctionComponent, useEffect, useState } from "react";
import { CloseIcon } from "../../../components/custom-icons";
import TextInputComponent from "../../../components/input-component";
import SelectInputComponent from "../../../components/select-component";
import TextSelectComponent from "../../../components/text-select-component";
import { discountTypeEnum } from "../../../models/product/product-model";
import { variantInterface } from "../../../models/variants/variant-model";
import { useProductData } from "../services/product-context";
import "./variant-display-form.scss";

type VariantDisplayFormProps = {
  variantData: any;
  productIndex: number;
  variantIndex: number;
  updateVariantArray: (val1: number, val2: variantInterface) => void;
};

const VariantDisplayForm: FunctionComponent<VariantDisplayFormProps> = ({
  variantData,
  productIndex,
  variantIndex,
  updateVariantArray,
}) => {
  const { removeVariant } = useProductData();

  const updateVariantData = (e: any) => {
    const fieldName = e.target.name;
    const fieValue = e.target.value;

    switch (fieldName) {
      case "amount":
        updateVariantArray(variantIndex, {
          ...variantData,
          discountAmount: Number.isNaN(fieValue)
            ? undefined
            : (fieValue as number),
        });
        break;
      case "type":
        updateVariantArray(variantIndex, {
          ...variantData,
          discountType: fieValue as discountTypeEnum,
        });
        break;
      default:
    }
  };

  return (
    <div>
      <div className="variant-display-form-conteinar">
        <div className="variant-name-area">
          <TextSelectComponent variant="rounded" value={variantData.title} />
        </div>
        <div className="variant-discount-area">
          <div className="variant-discount-form-area">
            <div className="variant-discount-form-amount-area">
              <TextInputComponent
                onChange={updateVariantData}
                fieldName="amount"
                variant="rounded"
                value={variantData.discountAmount}
              />
            </div>
            <div className="variant-discount-form-offer-dropdown">
              <SelectInputComponent
                onChange={updateVariantData}
                fieldName="type"
                variant="rounded"
                value={variantData.discountType}
              />
            </div>
          </div>
        </div>
        <div
          className="variant-removeIcon"
          onClick={() => removeVariant(productIndex, variantIndex)}
        >
          <CloseIcon fill="#00000066" />
        </div>
      </div>
    </div>
  );
};

export default VariantDisplayForm;
