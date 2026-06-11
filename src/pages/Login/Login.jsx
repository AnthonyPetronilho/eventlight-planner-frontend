import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Login.css";

function Login({ isLoggedIn, onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const [serverError, setServerError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setServerError("");

    onLogin({ email, password })
      .then(() => {
        navigate("/library");
      })
      .catch((err) => {
        setServerError(err);
      });
  };

  if (isLoggedIn) {
    return <Navigate to="/library" replace />;
  }

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />

      <main className="login">
        <section className="login__container">
          <h1 className="login__title">Entrar</h1>

          <form className="login__form" onSubmit={handleSubmit}>
            <input
              className="login__input"
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              className="login__input"
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength="8"
            />

            {serverError && <span className="login__error">{serverError}</span>}

            <button className="login__button" type="submit">
              Fazer login
            </button>
          </form>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Login;
