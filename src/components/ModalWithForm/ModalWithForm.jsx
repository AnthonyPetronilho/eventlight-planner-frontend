import "./ModalWithForm.css";

function ModalWithForm({ isOpen, title, buttonText, onClose, children }) {
  return (
    <div
      className={`modal ${isOpen ? "modal_opened" : ""}`}
      onMouseDown={onClose}
    >
      <div
        className="modal__container"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <button
          className="modal__close-button"
          type="button"
          onClick={onClose}
          aria-label="Fechar modal"
        >
          ×
        </button>

        <h2 className="modal__title">{title}</h2>

        <form className="modal__form">
          {children}

          <button className="modal__submit-button" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
