import "./Modal.css";
import ReactDOM from "react-dom";

export default function Modal({ open, onClose, children }) {
  if (!open) return null;

  const modalLayer = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.7)",
    zIndex: 1000,
  };

  const modalPosition = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    zIndex: 1000,
    backgroundColor: "white",
  };

  return ReactDOM.createPortal(
    <>
      <div className="modal-layer" style={modalLayer}></div>

      <div style={modalPosition}>
        <div>
          <button className="modal-close-btn" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
}
