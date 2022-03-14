const Modal = ({ children, onClose }) => {
  return (
    <div
      className="modal animate__animated animate__fadeInRight"
      id="modal"
      tabIndex="-1"
      style={{ display: "block" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="title text-center fw-bold ">Add todo</h3>
            <hr className="line" />
            <button type="button" className="close" onClick={() => onClose()}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
