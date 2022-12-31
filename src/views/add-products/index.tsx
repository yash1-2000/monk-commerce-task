import { FunctionComponent } from "react";
import ProductDisplay from "../../features/product-display/presentation";

const AddProductsView: FunctionComponent = () => {
  return (
    <div style={{ margin: "0 3rem" }}>
      <ProductDisplay />
    </div>
  );
};

export default AddProductsView;
