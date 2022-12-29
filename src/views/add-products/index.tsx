import { FunctionComponent } from "react";
import TextSelectComponent from "../../components/text-select-component";
import { OpenInFullIcon } from "../../components/custom-icons";
import TextInputComponent from "../../components/input-component";
import SelectInputComponent from "../../components/select-component";
import ButtonComponent from "../../components/button-component";
import DialogComponent from "../../components/dialog-component";
import ProductList from "../../features/product-picker/presentation/product-list";

const AddProductsView: FunctionComponent = () => {
  return (
    <div style={{ margin: "0 3rem" }}>
      <center>
        <br />
        <br />
        <TextSelectComponent hasIconBtn={true} />
        <br />
        <TextSelectComponent varient="rounded" hasIconBtn={true} />
        <br />
        <TextInputComponent />
        <br />
        <SelectInputComponent />
        <br />
        <OpenInFullIcon fill="#00000080" height="15" width="22" />
        <br />
        <ButtonComponent
          fillColour="yellow"
          varient="filled"
          height="50px"
          width="100px"
        >
          hello from parent
        </ButtonComponent>
        <br />
        <ButtonComponent
          fillColour="yellow"
          varient="outelined"
          height="50px"
          width="100px"
        >
          hello from parent
        </ButtonComponent>
        <br />
        <ButtonComponent
          fillColour="#008060"
          varient="outelined"
          height="50px"
          width="100px"
        >
          hello
        </ButtonComponent>
        <br />
        <ButtonComponent
          fillColour="#008060"
          varient="filled"
          height="30px"
          width="auto"
        >
          djcnsdjcnsdcnsdjknsjdkvsdjcnsdjkcnsdjkcnsdjkcsdjcsdjc
        </ButtonComponent>
        <br />
        <button>djcnsdjcnsdcnsdjknsjdkvsdjcnsdjkcnsdjkcnsdjkcsdjcsdjc</button>
        <br />
        <DialogComponent
          bottomActionButtons={[
            <ButtonComponent
              fillColour="#008060"
              varient="outelined"
              height="30px"
              width="auto"
            >
              cancel
            </ButtonComponent>,
            <ButtonComponent
              fillColour="#008060"
              varient="filled"
              height="30px"
              width="auto"
            >
              Add
            </ButtonComponent>,
          ]}
        >
          <ProductList />
        </DialogComponent>
      </center>
    </div>
  );
};

export default AddProductsView;
