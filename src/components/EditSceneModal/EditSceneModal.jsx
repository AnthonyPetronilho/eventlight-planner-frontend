import SceneForm from "../SceneForm/SceneForm";
import "../ModalWithForm/ModalWithForm.css";

function EditSceneModal({ isOpen, scene, onClose, onUpdateScene }) {
  if (!scene) {
    return null;
  }

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

        <h2 className="modal__title">Editar cena</h2>

        <SceneForm
          initialData={scene}
          submitText="Atualizar cena"
          onSubmit={(data) => onUpdateScene(scene._id, data)}
        />
      </div>
    </div>
  );
}

export default EditSceneModal;
