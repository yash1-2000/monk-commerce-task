import {
  createContext,
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from "react";
import { productInterface } from "../../../models/product/product-model";

type UserAccountContextProps = {
  productData: any;
  addProductData: (productIndexToUpdate: number, dataList: []) => void;
  addEmptyProductData: () => void;
  modifyProductData: () => void;
  reArrangeProductData: (id1: number, id2?: number) => void;
  reArrangeVariantData: (
    productIndex: number,
    id1: number,
    id2?: number
  ) => void;
  removeProduct: (productIndex: number) => void;
  removeVariant: (productIndex: number, variantIndex: number) => void;
  areProductsRemovable: boolean;
  updateProductData: (id: number, data: productInterface) => void;
  updateOptionTrack: (val: any) => void;
  optionTrack: any;
};

const ProductDataContext = createContext<UserAccountContextProps>({
  productData: [],
  addProductData: () => {},
  addEmptyProductData: () => {},
  modifyProductData: () => {},
  reArrangeProductData: () => {},
  reArrangeVariantData: () => {},
  removeProduct: () => {},
  removeVariant: () => {},
  areProductsRemovable: false,
  updateProductData: () => {},
  updateOptionTrack: () => {},
  optionTrack: [],
});

export const ProductDataProvider: FunctionComponent<{ children: any }> = ({
  children,
}) => {
  const [productData, SetProductData] = useState<any>([{}]);
  const [areProductsRemovable, SetAreProductsRemovable] = useState<any>(false);
  const [optionTrack, SetOptionTrack] = useState<any>([]);

  useEffect(() => {
    console.log(productData);
    const filteredProducts = productData.filter(
      (data: any[]) => Object.keys(data).length !== 0
    );
    if (filteredProducts.length > 1) {
      SetAreProductsRemovable(true);
    } else {
      SetAreProductsRemovable(false);
    }
  }, [productData]);

  const updateOptionTrack = (title: any) => {
    SetOptionTrack((prev: any) => [...prev, title]);
  };

  const addEmptyProductData = () => {
    SetProductData((prev: any) => [...prev, {}]);
  };

  const addProductData = (productIndexToUpdate: number, dataList: []) => {
    const productDataCopy = [...productData];
    productDataCopy.splice(productIndexToUpdate, 1, ...dataList);
    SetProductData(() => [...productDataCopy]);
  };

  const modifyProductData = () => {
    SetProductData(["modifieData"]);
  };

  const reArrangeProductData = (id1: number, id2?: number) => {
    if (!id2 || id1 === id2) {
      return;
    }

    const productDataCopy = [...productData];
    const [removed] = productDataCopy.splice(id1, 1);
    productDataCopy.splice(id2, 0, removed);
    SetProductData(() => [...productDataCopy]);
  };

  const reArrangeVariantData = (
    productIndex: number,
    id1: number,
    id2?: number
  ) => {
    if (id2 === undefined || id1 === id2) {
      return;
    }
    const productDataCopy = [...productData];
    const productDataInState = productDataCopy[productIndex];
    const productDataInStateVariants = productDataInState.variants;
    const [removed] = productDataInStateVariants.splice(id1, 1);
    productDataInStateVariants.splice(id2, 0, removed);
    SetProductData(() => [...productDataCopy]);
  };

  const removeProduct = (productIndex: number) => {
    const productDataCopy = [...productData];
    const pData = productDataCopy[productIndex];
    productDataCopy.splice(productIndex, 1);
    SetProductData(() => [...productDataCopy]);
    const pIdx = optionTrack.indexOf(pData.id);
    SetOptionTrack((prev: any) => prev.splice(pIdx, 1));
  };

  const removeVariant = (productIndex: number, variantIndex: number) => {
    const productDataCopy = [...productData];
    const productDataInState = productDataCopy[productIndex];
    productDataInState.variants.splice(variantIndex, 1);
    SetProductData(() => [...productDataCopy]);
  };

  const updateProductData = (id: number, data: productInterface) => {
    const productDataCopy = [...productData];
    productDataCopy[id] = data;
    SetProductData(() => [...productDataCopy]);
  };

  return (
    <ProductDataContext.Provider
      value={{
        productData,
        addEmptyProductData,
        addProductData,
        modifyProductData,
        reArrangeProductData,
        reArrangeVariantData,
        removeProduct,
        removeVariant,
        areProductsRemovable,
        updateProductData,
        updateOptionTrack,
        optionTrack,
      }}
    >
      {children}
    </ProductDataContext.Provider>
  );
};

export const useProductData = (): UserAccountContextProps =>
  useContext(ProductDataContext);
