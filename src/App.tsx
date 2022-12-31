import "./App.css";
import { ProductDataProvider } from "./features/product-display/services/product-context";
import AddProductsView from "./views/add-products";

function App() {
  return (
    <div className="App">
      <ProductDataProvider>
        <AddProductsView />
      </ProductDataProvider>
    </div>
  );
}

export default App;
