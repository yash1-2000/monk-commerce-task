import { FunctionComponent } from "react";
import "././dialog-sub-components.scss";

const DialogHeaderComponent: FunctionComponent = () => {
  return (
    <div className="dialog-header-component">
      <div className="dialog-header-container">
        <div>Select Products</div>
        <div className="dialog-close-icon">
          <span className="fa-sharp fa-solid fa-xmark"></span>
        </div>
      </div>
    </div>
  );
};

export default DialogHeaderComponent;
