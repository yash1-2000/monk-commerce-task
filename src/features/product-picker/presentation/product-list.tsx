import { FunctionComponent, ReactElement, useEffect, useState } from "react";
import { dummyProducts } from "../../../dummy-products";
import ProductSelector from "./product-selector";

const ProductList: FunctionComponent = (): ReactElement => {
  const [allProductList, SetAllProductList] = useState<any>([]);
  const selectList = (list: boolean[], productId: number) => {
    console.log(list, productId);
    if (list.some(Boolean)) {
      console.log("some are selected");
      const selectedProduct = dummyProducts.find(
        (product) => product.id === productId
      );
      SetAllProductList((prev: any) => [...prev, selectedProduct]);
    } else {
      console.log("no varient selected hens do not addproduct");
      const pIndex = allProductList.findIndex(
        (product: any) => product.id === productId
      );
      const newA = [...allProductList];
      newA.splice(pIndex, 1);
      console.log(pIndex, newA);
      SetAllProductList(() => [...newA]);
    }
  };

  useEffect(() => {
    console.log(allProductList);
  }, [allProductList]);
  return (
    <div>
      {dummyProducts.map((product, id) => (
        <ProductSelector selectList={selectList} product={product} key={id} />
      ))}
    </div>
  );
};

export default ProductList;
