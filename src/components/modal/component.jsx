import { createPortal } from "react-dom";
import { Button } from "../button/component";

export const Modal = ({ children, onClose }) => {
  return createPortal(
    (<div className="modal">
      <div className="modal__wrapper">
        <div className="modal__overlay" onClick={onClose} />
        <div className="modal__content">
          {children}
          <Button onClick={onClose}>Закрыть</Button>
        </div>
      </div>
    </div>),
    document.getElementById('modal')
  );
};
