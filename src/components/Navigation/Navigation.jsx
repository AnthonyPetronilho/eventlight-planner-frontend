import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="navigation">
      <Link className="navigation__link" to="/">
        Home
      </Link>
      <Link className="navigation__link" to="/colors">
        Cores
      </Link>
      <Link className="navigation__link" to="/login">
        Entrar
      </Link>
    </nav>
  );
}

export default Navigation;
