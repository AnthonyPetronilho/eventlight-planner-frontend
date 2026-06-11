import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation({ isLoggedIn, onLogout, onLoginClick }) {
  return (
    <nav className="navigation">
      <Link className="navigation__link" to="/">
        Home
      </Link>

      <Link className="navigation__link" to="/colors">
        Explorar cores
      </Link>

      {isLoggedIn && (
        <Link className="navigation__link" to="/library">
          Biblioteca
        </Link>
      )}

      {isLoggedIn ? (
        <button className="navigation__button" type="button" onClick={onLogout}>
          Sair
        </button>
      ) : (
        <button
          className="navigation__button"
          type="button"
          onClick={onLoginClick}
        >
          Entrar
        </button>
      )}
    </nav>
  );
}

export default Navigation;
