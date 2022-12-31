import { FunctionComponent, ReactElement } from "react";
import ProductDisplayForm from "../presentation/product-display-form";
import VariantDisplay from "../presentation/variant-display";
import { useProductData } from "../services/product-context";

type ProductFormsComponentProps = {
  isEmpty: boolean;
  productData: any;
  keyIndex: number;
  selectProducts: (key: number) => void;
};

const ProductFormsComponent: FunctionComponent<ProductFormsComponentProps> = ({
  isEmpty,
  productData,
  keyIndex,
  selectProducts,
}): ReactElement => {
  const { updateProductData } = useProductData();

  const updateProductDataState = (fieldType: string, fieldData: any) => {
    if (fieldType === "productForm") {
      updateProductData(keyIndex, fieldData);
    } else if (fieldType === "variantsForm") {
      const clone = structuredClone(productData);
      clone.variants = fieldData;
      updateProductData(keyIndex, clone);
    }
  };

  return (
    <div>
      <ProductDisplayForm
        isEmpty={isEmpty}
        productData={productData}
        keyIndex={keyIndex}
        selectProducts={() => selectProducts(keyIndex)}
        updateProductDataState={updateProductDataState}
      />
      <br />
      <VariantDisplay
        variantArray={isEmpty ? [] : productData.variants}
        productIndex={keyIndex}
        updateProductDataState={updateProductDataState}
      />
    </div>
  );
};

export default ProductFormsComponent;
