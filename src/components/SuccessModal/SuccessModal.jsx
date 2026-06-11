import ModalWithForm from "../ModalWithForm/ModalWithForm";

function SuccessModal({ isOpen, onClose, onLoginClick }) {
  return (
    <ModalWithForm
      isOpen={isOpen}
      title="Cadastro realizado com sucesso!"
      buttonText="Entrar"
      onClose={onClose}
      onSubmit={(e) => {
        e.preventDefault();
        onLoginClick();
      }}
    />
  );
}

export default SuccessModal;
