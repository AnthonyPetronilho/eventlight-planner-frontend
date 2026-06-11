import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation({ isLoggedIn, onLogout }) {
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
        <Link className="navigation__link" to="/login">
          Entrar
        </Link>
      )}
    </nav>
  );
}

export default Navigation;
