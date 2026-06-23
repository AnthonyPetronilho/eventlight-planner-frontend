import "./ModalWithForm.css";

function ModalWithForm({
  isOpen,
  title,
  buttonText,
  onClose,
  onSubmit,
  children,
  isSubmitDisabled,
  footerText,
  onFooterClick,
}) {
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

        <form className="modal__form" onSubmit={onSubmit}>
          {children}

          <button
            className="modal__submit-button"
            type="submit"
            disabled={isSubmitDisabled}
          >
            {buttonText}
          </button>

          {footerText && (
            <p className="modal__footer-text">
              ou{" "}
              <button
                className="modal__footer-button"
                type="button"
                onClick={onFooterClick}
              >
                {footerText}
              </button>
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
