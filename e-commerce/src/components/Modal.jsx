import ReactModal from "react-modal";

const Modal = ({ isOpen, onClose, children }) => (
  <ReactModal isOpen={isOpen} onRequestClose={onClose} ariaHideApp={false}>
    {children}
  </ReactModal>
);

export default Modal;
