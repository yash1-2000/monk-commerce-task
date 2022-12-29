import { FunctionComponent, ReactElement } from "react";
import ButtonComponent from "../button-component";
import "./dialog-component.scss";
import DialogBottomComponent from "./sub-components/dialog-bottom";
import DialogHeaderComponent from "./sub-components/dialog-header";

type DialogComponentProps = {
  children: ReactElement;
  bottomActionButtons: ReactElement[];
};

const DialogComponent: FunctionComponent<DialogComponentProps> = ({
  children,
  bottomActionButtons,
}) => {
  return (
    <div className="dialog-component">
      <div className="dialog-container">
        <DialogHeaderComponent />
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
