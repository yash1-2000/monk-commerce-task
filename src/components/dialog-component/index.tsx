import { FunctionComponent, ReactElement } from "react";
import ButtonComponent from "../button-component";
import "./dialog-component.scss";
import DialogBottomComponent from "./sub-components/dialog-bottom";
import DialogHeaderComponent from "./sub-components/dialog-header";

type DialogComponentProps = {
  children: ReactElement;
  bottomActionButtons: ReactElement[];
  onClose: () => void;
};

const DialogComponent: FunctionComponent<DialogComponentProps> = ({
  children,
  bottomActionButtons,
  onClose,
}) => {
  return (
    <div className="dialog-component">
      <div className="dialog-container">
        <DialogHeaderComponent onClose={onClose} />
        <div className="dialog-content">{children}</div>
        <DialogBottomComponent
          actionButtons={bottomActionButtons}
          DialogBottomText="1 product selected"
        />
      </div>
    </div>
  );
};

export default DialogComponent;
