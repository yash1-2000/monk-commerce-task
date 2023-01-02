import { useEffect, useState } from "react";
import ButtonComponent from "../../../components/button-component";
import DialogComponent from "../../../components/dialog-component";
import { transformToProductInterface } from "../../../models/product/product-model";
import ProductList from "../../product-picker/presentation/product-list";
import { useProductData } from "../services/product-context";
import ProductDisplayList from "./product-display-list";
import "./product-display.scss";

const ProductDisplay = () => {
  const [productDialogOpen, SetProductDialogOpen] = useState<Boolean>(false);
  const [productDataList, SetProductDataList] = useState<any>([]);
  const [productIndexToUpdate, SetProductIndexToUpdate] = useState<number>(0);

  const { addProductData, addEmptyProductData } = useProductData();

  const addData = (data: any) => {
    const existedId = productDataList.findIndex(
      (product: any) => product.id === data.id
    );
    if (existedId !== -1) {
      const productsArray = [...productDataList];
      productsArray[existedId] = data;
      const mappedProductData = productsArray.map((data) =>
        transformToProductInterface(data)
      );
      console.log(mappedProductData);
      SetProductDataList(() => [...mappedProductData]);
    } else {
      console.log(transformToProductInterface(data));
      SetProductDataList((prev: any) => [
        ...prev,
        transformToProductInterface(data),
      ]);
    }
  };

  const removeData = (id: string) => {
    const productsArray = [...productDataList];
    SetProductDataList(() => [
      ...productsArray.filter((element) => element.id !== id),
    ]);
  };

  const handleSelectProductClick = (id: number) => {
    SetProductIndexToUpdate(id);
    SetProductDialogOpen(true);
  };

  useEffect(() => {
    console.log(productDataList);
  }, [productDataList]);

  return (
    <div className="product-display-container">
      <h3>Add Products</h3>
      <ProductDisplayList selectProducts={handleSelectProductClick} />
      <div className="add-product-option">
        <ButtonComponent
          fillColour="#008060"
          variant="outelined"
          height="50px"
          width="auto"
          onClick={() => addEmptyProductData()}
        >
          Add Product
        </ButtonComponent>
        <br />
        <br />
      </div>
      {productDialogOpen && (
        <DialogComponent
          bottomText={`${productDataList.length} products selected`}
          bottomActionButtons={[
            <ButtonComponent
              fillColour="#00000099"
              variant="outelined"
              height="30px"
              width="auto"
              onClick={() => SetProductDialogOpen(false)}
            >
              cancel
            </ButtonComponent>,
            <ButtonComponent
              fillColour="#008060"
              variant="filled"
              height="30px"
              width="auto"
              onClick={() => {
                addProductData(productIndexToUpdate, productDataList);
                SetProductDialogOpen(false);
                SetProductIndexToUpdate(0);
              }}
            >
              Add
            </ButtonComponent>,
          ]}
          onClose={() => SetProductDialogOpen(false)}
        >
          <ProductList
            SetProductDataList={SetProductDataList}
            addData={addData}
            removeData={removeData}
          />
        </DialogComponent>
      )}
    </div>
  );
};

export default ProductDisplay;
