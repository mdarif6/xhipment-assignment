import "./Modal.css";
import ReactDOM from "react-dom";

export default function Modal({ open, onClose, children }) {
  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0.7)",
          zIndex: 1000,
        }}
      ></div>

      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          zIndex: 1000,
          backgroundColor: "white",
        }}
      >
        <button className="modal-close-btn" onClick={onClose}>
          <i class="fas fa-times"></i>
        </button>
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
}
