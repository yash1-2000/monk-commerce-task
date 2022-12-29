import { FunctionComponent, ReactElement, useEffect, useState } from "react";

type ProductSelectorProps = {
  product: any;
  selectList: any;
};

// const initialState = {
//   product: {
//     id: "",
//     title: "",
//     varients: [
//       { id: "", title: "" },
//       { id: "", title: "" },
//     ],
//   },
// };

// enum productCheckBoxStateEnum {
//   CHECKED = "checked",
//   UNCHECKED = "unchecked",
//   INDETERMINATE = "indeterminate",
// }

type varientType = {
  id: string;
  title: string;
};

const ProductSelector: FunctionComponent<ProductSelectorProps> = ({
  product,
  selectList,
}): ReactElement => {
  //   const [productCheckboxState, SetProductCheckboxState] =
  //     useState<productCheckBoxStateEnum>(productCheckBoxStateEnum.UNCHECKED);
  //   const [checkBoxState, SetChechBoxState] = useState<varientType[]>([]);

  const [checkedItems, setCheckedItems] = useState(
    product.variants.map(() => false)
  );

  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

  const handleAllselect = (e: any) => {
    setCheckedItems(product.variants.map(() => e.target.checked));
  };

  const handleIndividualselect = (e: any, id: number) => {
    setCheckedItems([
      ...checkedItems.slice(0, id),
      e.target.checked,
      ...checkedItems.slice(id + 1),
    ]);
  };

  useEffect(() => {
    selectList(checkedItems, product.id);
  }, [checkedItems]);

  //   useEffect(() => {
  //     console.log(checkBoxState);
  //     if (checkBoxState.length > 0) {
  //       SetProductCheckboxState(() => productCheckBoxStateEnum.INDETERMINATE);
  //     } else {
  //       SetProductCheckboxState(() => productCheckBoxStateEnum.UNCHECKED);
  //     }
  //   }, [checkBoxState]);

  //   useEffect(() => {
  //     console.log(checkBoxState);
  //     if (checkBoxState.length > 0) {
  //       SetProductCheckboxState(() => productCheckBoxStateEnum.INDETERMINATE);
  //     } else {
  //       SetProductCheckboxState(() => productCheckBoxStateEnum.UNCHECKED);
  //     }
  //   }, [checkBoxState.length]);

  return (
    <div>
      <ul>
        <li>
          <input
            type="checkbox"
            name={product.title}
            data-id={product.id}
            checked={allChecked}
            // checked={productCheckboxState === productCheckBoxStateEnum.CHECKED}
            ref={(input) => {
              if (input) {
                // input.indeterminate =
                //   productCheckboxState ===
                //   productCheckBoxStateEnum.INDETERMINATE;
                input.indeterminate = isIndeterminate;
              }
            }}
            // onChange={(e) => handleAllselect(e)}
            onChange={(e) => handleAllselect(e)}
            id="option"
          />
          <label>{product.title}</label>
          {
            <ul>
              {product.variants.map((varient: any, id: number) => (
                <li key={id}>
                  <label>
                    <input
                      type="checkbox"
                      className="subOption"
                      //   onChange={(e) => handleIndividualselect(e)}
                      checked={checkedItems[id]}
                      onChange={(e: any) => handleIndividualselect(e, id)}
                      name={varient.title}
                      data-id={varient.id}
                    />{" "}
                    {varient.title}
                  </label>
                </li>
              ))}
            </ul>
          }
        </li>
      </ul>
    </div>
  );
};

export default ProductSelector;
