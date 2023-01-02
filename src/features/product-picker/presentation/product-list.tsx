import {
  FunctionComponent,
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import ProductSelector from "./product-selector";
import "./product-list.scss";
import SearchComponent from "../../../components/search-component";
import { getProducts } from "../../../api/products-service/product-service-api";
import useDebounce from "../../../hooks/use-debaunce-hook";
import { ClipLoader } from "react-spinners";

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
  const [noData, setNodata] = useState(false);
  const debauncedSearch = useDebounce(searchString, 1000);
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    if (searchStringTrack !== debauncedSearch) {
      SetProductDataList([]);
      SetAllProductList([]);
      setSearchStringTrack(debauncedSearch);
      getProducts(debauncedSearch, 0).then((data) => {
        if (data === null) {
          return setNodata(true);
        } else {
          setNodata(false);
          return SetAllProductList(() => [...data]);
        }
      });
      setPageNumber(0);
    } else {
      getProducts(debauncedSearch, pageNumber).then((data) => {
        if (data === null) {
          return setNodata(true);
        } else {
          setNodata(false);
          return SetAllProductList((prev: any) => [...prev, ...data]);
        }
      });
    }

    return () => SetProductDataList([]);
  }, [debauncedSearch]);

  useEffect(() => {
    if (searchStringTrack !== debauncedSearch) {
      console.log("fetching initially", pageNumber);
      setSearchStringTrack(debauncedSearch);
      getProducts(debauncedSearch, 0).then((data) => {
        if (data === null) {
          return setNodata(true);
        } else {
          setNodata(false);
          return SetAllProductList(() => [...data]);
        }
      });
      setPageNumber(0);
    } else {
      console.log("fetching again", pageNumber);
      getProducts(debauncedSearch, pageNumber).then((data) => {
        if (data === null) {
          return setNodata(true);
        } else {
          setNodata(false);
          return SetAllProductList((prev: any) => [...prev, ...data]);
        }
      });
    }

    return () => SetProductDataList([]);
  }, [pageNumber]);

  const selectList = (list: boolean[], product: any) => {
    if (list.every((element) => element === false)) {
      removeData(product.id);
    } else {
      addData(product);
    }
  };

  const scrollMore = (e: any) => {
    if (
      e.target.clientHeight + e.target.scrollTop + 1 >=
      e.target.scrollHeight
    ) {
      if (e.target.scrollTop === 0) return;
      console.log("cscdsjjdsdcjs");
      setPageNumber((prevPageNumber) => prevPageNumber + 1);
    }
  };

  return (
    <div
      style={{
        position: "relative",
        height: "100%",
        overflowY: "scroll",
      }}
      onScroll={(e: any) => scrollMore(e)}
    >
      <div className="search-container">
        <SearchComponent onChange={setSearchString} />
      </div>
      <div>
        {allProductList.length === 0 ? (
          <div className="loader-container">
            <ClipLoader color="#008060" />
          </div>
        ) : (
          <div>
            {noData && allProductList.length === 0 ? (
              <div>No Data</div>
            ) : (
              <div>
                {allProductList.map((product: any, id: any) =>
                  allProductList.length === id + 1 ? (
                    <div key={id}>
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
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
