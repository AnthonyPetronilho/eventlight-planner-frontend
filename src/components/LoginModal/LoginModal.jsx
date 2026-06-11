import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LoginModal({ isOpen, onClose, onLogin, onSwitchToRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [serverError, setServerError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const isFormValid = email.includes("@") && password.length >= 8;

  const handleEmailChange = (e) => {
    setEmail(e.target.value);

    if (e.target.validity.valueMissing) {
      setEmailError("Digite seu e-mail.");
    } else if (e.target.validity.typeMismatch) {
      setEmailError("Digite um e-mail válido.");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);

    if (e.target.validity.valueMissing) {
      setPasswordError("Digite sua senha.");
    } else if (e.target.validity.tooShort) {
      setPasswordError("A senha deve ter pelo menos 8 caracteres.");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setServerError("");
    setIsLoading(true);

    onLogin({ email, password })
      .then(() => {
        setEmail("");
        setPassword("");
        setServerError("");
        onClose();
      })
      .catch((err) => {
        setServerError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <ModalWithForm
      isOpen={isOpen}
      title="Entrar"
      buttonText={isLoading ? "Entrando..." : "Entrar"}
      onClose={onClose}
      onSubmit={handleSubmit}
      isSubmitDisabled={!isFormValid || isLoading}
      footerText="Inscreva-se"
      onFooterClick={onSwitchToRegister}
    >
      <label className="modal__label">
        E-mail:
        <input
          className="modal__input"
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <span className="modal__error">{emailError}</span>
      </label>

      <label className="modal__label">
        Senha:
        <input
          className="modal__input"
          type="password"
          placeholder="Senha"
          value={password}
          onChange={handlePasswordChange}
          required
          minLength="8"
        />
        <span className="modal__error">{passwordError}</span>
      </label>

      <span className="modal__server-error">{serverError}</span>
    </ModalWithForm>
  );
}

export default LoginModal;
