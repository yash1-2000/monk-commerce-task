import {
  FunctionComponent,
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { dummyProducts } from "../../../dummy-products";
import ProductSelector from "./product-selector";
import "./product-list.scss";
import SearchComponent from "../../../components/search-component";
import { getProducts } from "../../../api/products-service/product-service-api";
import useDebounce from "../../../hooks/use-debaunce-hook";

type ProductListProps = {
  SetProductDataList: any;
  addData: (data: any) => void;
  removeData: (id: string) => void;
};

const ProductList: FunctionComponent<ProductListProps> = ({
  SetProductDataList,
  addData,
  removeData,
}): ReactElement => {
  const [allProductList, SetAllProductList] = useState<any>([]);
  const [searchString, setSearchString] = useState("");
  const [searchStringTrack, setSearchStringTrack] = useState("");
  const debauncedSearch = useDebounce(searchString, 1000);
  const [pageNumber, setPageNumber] = useState(0);
  const observer = useRef<IntersectionObserver | null>(null);
  useEffect(() => {
    // if (searchString === "") return;
    if (searchStringTrack !== debauncedSearch) {
      setSearchStringTrack(debauncedSearch);
      getProducts(debauncedSearch, 0).then((data) =>
        SetAllProductList(() => [...data])
      );
      setPageNumber(0);
    } else {
      getProducts(debauncedSearch, pageNumber).then((data) =>
        SetAllProductList((prev: any) => [...prev, ...data])
      );
    }

    return () => SetProductDataList([]);
  }, [pageNumber, debauncedSearch]);

  const selectList = (list: boolean[], product: any) => {
    if (list.every((element) => element === false)) {
      removeData(product.id);
    } else {
      addData(product);
    }
  };

  const lastProductElementRef = useCallback((node: any) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        console.log("intersecting");
        setPageNumber((prevPageNumber) => prevPageNumber + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, []);

  useEffect(() => {
    console.log("debaunce", debauncedSearch);
  }, [debauncedSearch]);

  useEffect(() => {
    console.log("normal", searchString);
  }, [searchString]);

  return (
    <div>
      <div className="search-container">
        <SearchComponent onChange={setSearchString} />
      </div>
      <div>
        {allProductList.map((product: any, id: any) =>
          //  <ProductSelector selectList={selectList} product={product} key={id} />
          allProductList.length === id + 1 ? (
            <div ref={lastProductElementRef} key={id}>
              <ProductSelector
                selectList={selectList}
                product={product}
                key={id}
              />
            </div>
          ) : (
            <ProductSelector
              selectList={selectList}
              product={product}
              key={id}
            />
          )
        )}
      </div>
    </div>
  );
};

export default ProductList;
