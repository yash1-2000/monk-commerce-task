import { FunctionComponent } from "react";
import { CloseIcon } from "../../custom-icons";
import "././dialog-sub-components.scss";

const DialogHeaderComponent: FunctionComponent<{ onClose: () => void }> = ({
  onClose,
}) => {
  return (
    <div className="dialog-header-component">
      <div className="dialog-header-container">
        <div>Select Products</div>
        <div className="dialog-close-icon" onClick={onClose}>
          {/* <span className="fa-sharp fa-solid fa-xmark"></span> */}
          {/* <span>X</span> */}
          <CloseIcon fill="black"/>
        </div>
      </div>
    </div>
  );
};

export default DialogHeaderComponent;
