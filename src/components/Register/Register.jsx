import { useEffect, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function Register({ isOpen, onClose, onRegister, onSwitchToLogin }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [serverError, setServerError] = useState("");

  const isFormValid =
    name.length >= 2 &&
    name.length <= 30 &&
    email.includes("@") &&
    password.length >= 8;

  useEffect(() => {
    if (!isOpen) {
      setName("");
      setEmail("");
      setPassword("");
      setNameError("");
      setEmailError("");
      setPasswordError("");
      setServerError("");
    }
  }, [isOpen]);

  const handleNameChange = (e) => {
    setName(e.target.value);

    if (e.target.validity.valueMissing) {
      setNameError("Digite seu nome.");
    } else if (e.target.validity.tooShort) {
      setNameError("O nome deve ter pelo menos 2 caracteres.");
    } else if (e.target.validity.tooLong) {
      setNameError("O nome deve ter no máximo 30 caracteres.");
    } else {
      setNameError("");
    }
  };

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

    onRegister({ name, email, password })
      .then(() => {
        setName("");
        setEmail("");
        setPassword("");
        setServerError("");
        onSwitchToLogin();
      })
      .catch((err) => {
        setServerError(err);
      });
  };

  return (
    <ModalWithForm
      isOpen={isOpen}
      title="Inscreva-se"
      buttonText="Inscreva-se"
      onClose={onClose}
      onSubmit={handleSubmit}
      isSubmitDisabled={!isFormValid}
      footerText="Entrar"
      onFooterClick={onSwitchToLogin}
    >
      <label className="modal__label">
        Nome de usuário:
        <input
          className="modal__input"
          type="text"
          placeholder="Nome"
          value={name}
          onChange={handleNameChange}
          required
          minLength="2"
          maxLength="30"
        />
        <span className="modal__error">{nameError}</span>
      </label>

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

export default Register;
