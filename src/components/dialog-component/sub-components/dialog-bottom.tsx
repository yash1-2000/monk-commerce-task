import { FunctionComponent, ReactElement } from "react";
import ButtonComponent from "../../button-component";
import "./dialog-sub-components.scss";

type DialogBottomComponentProps = {
  actionButtons: ReactElement[];
  DialogBottomText: string;
};

const DialogBottomComponent: FunctionComponent<DialogBottomComponentProps> = ({
  actionButtons,
  DialogBottomText,
}): ReactElement => {
  return (
    <div className="dialog-bottom-component">
      <div className="dialog-bottom-container">
        <div>{DialogBottomText}</div>
        <div className="dialog-close-icon">
          {actionButtons.map((element) => element)}
        </div>
      </div>
    </div>
  );
};

export default DialogBottomComponent;
