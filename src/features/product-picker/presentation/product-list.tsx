import { FunctionComponent, ReactElement, useEffect, useState } from "react";
import { dummyProducts } from "../../../dummy-products";
import ProductSelector from "./product-selector";
import './product-list.scss'

const ProductList: FunctionComponent = (): ReactElement => {
  const [allProductList, SetAllProductList] = useState<any>([]);
  useEffect(() => {
    fetch(
      "https://stageapibc.monkcommerce.app/admin/shop/product?search=&page=0"
    )
      .then((response) => response.json())
      .then((data) => {
        if (data !== null) {
          SetAllProductList(data);
        }
      });
  }, []);
  const selectList = (list: boolean[], product: any) => {
    console.log(list, product);
    // if (list.some(Boolean)) {
    //   console.log("some are selected");
    //   const selectedProduct = dummyProducts.find(
    //     (product) => product.id === productId
    //   );
    //   SetAllProductList((prev: any) => [...prev, selectedProduct]);
    // } else {
    //   console.log("no varient selected hens do not addproduct");
    //   const pIndex = allProductList.findIndex(
    //     (product: any) => product.id === productId
    //   );
    //   const newA = [...allProductList];
    //   newA.splice(pIndex, 1);
    //   console.log(pIndex, newA);
    //   SetAllProductList(() => [...newA]);
    // }
  };

  useEffect(() => {
    console.log(allProductList);
  }, [allProductList]);
  return (
    <div>
      {allProductList.map((product: any, id: any) => (
        <ProductSelector selectList={selectList} product={product} key={id} />
      ))}
    </div>
  );
};

export default ProductList;
