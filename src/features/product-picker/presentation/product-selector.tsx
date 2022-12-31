import { FunctionComponent, ReactElement, useEffect, useState } from "react";
import "./product-selector.scss";

type ProductSelectorProps = {
  product: any;
  selectList: any;
};

const ProductSelector: FunctionComponent<ProductSelectorProps> = ({
  product,
  selectList,
}): ReactElement => {
  const variants = product.variants;
  let productObj = { id: product.id, title: product.title, variants: [] };

  const [checkedItems, setCheckedItems] = useState<any>(
    variants.map(() => false)
  );

  const allChecked = checkedItems.every(Boolean);

  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

  const handleAllselect = (e: any) => {
    setCheckedItems(product.variants.map(() => e.target.checked));
  };

  const handleIndividualselect = (e: any, id: number) => {
    setCheckedItems(() => [
      ...checkedItems.slice(0, id),
      e.target.checked,
      ...checkedItems.slice(id + 1),
    ]);
  };

  useEffect(() => {
    if (checkedItems.some(Boolean)) {
      const variantsArr = variants.filter((_: any, id: number) => {
        return checkedItems[id] === true;
      });
      productObj.variants = variantsArr;
      selectList(checkedItems, productObj);
    } else {
      productObj.variants = [];
      selectList(checkedItems, productObj);
      return;
    }
  }, [checkedItems]);

  return (
    <div>
      <div>
        <div>
          <div className="option-container">
            <label className="check-box-container">
              <input
                type="checkbox"
                className="chackbox_input"
                name={product.title}
                data-id={product.id}
                checked={allChecked}
                ref={(input) => {
                  if (input) {
                    input.indeterminate = isIndeterminate;
                  }
                }}
                onChange={(e) => handleAllselect(e)}
                id="option"
              />
              <span className="check-box"></span>
            </label>

            <div>
              <img
                style={{ width: "50px", background: "gray" }}
                src={product.image.src}
                alt=""
              />
            </div>

            <p style={{ margin: "0" }}>{product.title}</p>
          </div>

          {
            <div>
              {product.variants.map((varient: any, id: number) => (
                <div key={id} className="sub-option-container">
                  <label className="check-box-container">
                    <input
                      type="checkbox"
                      className="subOption"
                      checked={checkedItems[id]}
                      onChange={(e: any) => handleIndividualselect(e, id)}
                      name={varient.title}
                      data-id={varient.id}
                    />
                    <span className="check-box"></span>
                  </label>

                  <p style={{ margin: "0" }}>{varient.title}</p>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "end",
                      alignItems: "center",
                      gap: "0.5rem",
                      width: "60%",
                      marginRight: "0.5rem",
                      marginLeft: "auto",
                    }}
                  >
                    <p style={{ margin: "0" }}>
                      {varient.inventory_quantity
                        ? `${varient.inventory_quantity} available`
                        : ""}
                    </p>
                    <p style={{ margin: "0" }}>${varient.price}</p>
                  </div>
                </div>
              ))}
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default ProductSelector;
